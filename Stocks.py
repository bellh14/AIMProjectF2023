import numpy as np
import pandas as pd
import tensorflow as tf

import datetime
import os

from tensorflow.keras import Model, Sequential

from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.losses import MeanSquaredError
from tensorflow.keras.metrics import MeanAbsoluteError

from tensorflow.keras.layers import Dense, Conv1D, LSTM, Lambda, Reshape, RNN, LSTMCell

import warnings

warnings.filterwarnings("ignore")


class Stocks:
    def __init__(self, file_name: str, folder_name: str):
        self.file_name = file_name
        self.folder_name = folder_name
        self.markets = ["forbes2000", "nasdaq", "nyse", "sp500"]
        self.train_per = 0.7
        self.val_per = 0.2
        self.test_per = 0.1
        self.column_indices = None

    def save(self, df: pd.DataFrame, file_name: str) -> None:
        df.to_csv(file_name, index=False)

    def convert_date(self, df: pd.DataFrame) -> pd.DataFrame:
        df["Date"] = pd.to_datetime(df["Date"])
        df["Month"] = df["Date"].dt.month
        df["Year"] = df["Date"].dt.year
        df["Day"] = df["Date"].dt.day
        df = df.drop(["Date"], axis=1)
        return df

    def get_column_indices(self, df: pd.DataFrame) -> dict:
        return {name: i for i, name in enumerate(df.columns)}

    def split_dataset(
        self, df: pd.DataFrame
    ) -> [pd.DataFrame, pd.DataFrame, pd.DataFrame]:
        length = len(df)
        train = df[0 : int(length * self.train_per)]
        val = df[
            int(length * self.train_per) : int(length * (self.train_per + self.val_per))
        ]
        test = df[int(length * (self.train_per + self.val_per)) :]

        return train, val, test

    def normalize(
        self, train: pd.DataFrame, val: pd.DataFrame, test: pd.DataFrame
    ) -> [pd.DataFrame, pd.DataFrame, pd.DataFrame]:
        scaler = MinMaxScaler()
        scaler.fit(train)
        train[train.columns] = scaler.transform(train[train.columns])
        val[val.columns] = scaler.transform(val[val.columns])
        test[test.columns] = scaler.transform(test[test.columns])
        return train, val, test

    def data_pipeline(self):
        for market in self.markets:
            file_list = os.listdir(f"{self.folder_name}/{market}/csv/")
            for file in file_list:
                df = pd.DataFrame(pd.read_csv(file))
                df = self.convert_date(df)
                train, val, test = self.split_dataset(df)
                train_norm, val_norm, test_norm = self.normalize(train, val, test)
                self.save(
                    train_norm,
                    f"{self.folder_name}/{market}/csv/{file[:-4]}_train.csv",
                    index=False,
                    header=True,
                )
                self.save(
                    val_norm,
                    f"{self.folder_name}/{market}/csv/{file[:-4]}_val.csv",
                    index=False,
                    header=True,
                )
                self.save(
                    test_norm,
                    f"{self.folder_name}/{market}/csv/{file[:-4]}_test.csv",
                    index=False,
                    header=True,
                )
        self.column_indices = self.get_column_indices(train)

    def compile_and_fit(self, model, window, patience=3, max_epochs=50):
        early_stopping = EarlyStopping(
            monitor="val_loss", patience=patience, mode="min"
        )
        model.compile(
            loss=MeanSquaredError(), optimizer=Adam(), metrics=[MeanAbsoluteError()]
        )

        history = model.fit(
            window.train,
            epochs=max_epochs,
            validation_data=window.val,
            callbacks=[early_stopping],
        )
        return history
