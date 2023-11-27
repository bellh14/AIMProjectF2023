import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import tensorflow as tf
import matplotlib.pyplot as plt
import matplotlib.font_manager as font_manager
import seaborn as sns


class Visualizer:
    def plot_loss_plt(
        self,
        folder_name: str,
        file_name: str,
        history,
        ymin: int = 0,
        ymax: int = 10000,
    ):
        """Plot loss"""
        plt.plot(history.history["loss"], label="loss")
        plt.plot(history.history["val_loss"], label="val_loss")
        plt.ylim([ymin, ymax])
        plt.xlabel("Epoch")
        plt.ylabel("Error")
        plt.legend()
        plt.grid(True)
        plt.show()
        plt.savefig(f"{folder_name}{file_name}_loss.png")
        raise NotImplementedError


class DataWindow:
    def __init__(
        self,
        input_width: int,
        label_width: int,
        shift: int,
        train_df: pd.DataFrame,
        val_df: pd.DataFrame,
        test_df: pd.DataFrame,
        label_columns: list = None,
    ):
        self.save_count = 0
        self.input_width = input_width
        self.label_width = label_width
        self.shift = shift
        self.train_df = train_df
        self.val_df = val_df
        self.test_df = test_df
        self.label_columns = label_columns

        if label_columns is not None:
            self.label_columns_indices = {
                name: i for i, name in enumerate(label_columns)
            }

        self.column_indices = {name: i for i, name in enumerate(train_df.columns)}

        self.total_window_size = input_width + shift
        self.input_slice = slice(0, input_width)
        self.input_indices = np.arange(self.total_window_size)[self.input_slice]
        self.label_start = self.total_window_size - self.label_width
        self.labels_slice = slice(self.label_start, None)
        self.label_indices = np.arange(self.total_window_size)[self.labels_slice]

    def split_to_inputs_labels(self, features):
        inputs = features[:, self.input_slice, :]
        labels = features[:, self.labels_slice, :]
        if self.label_columns is not None:
            labels = tf.stack(
                [
                    labels[:, :, self.label_columns_indices[name]]
                    for name in self.label_columns
                ],
                axis=-1,
            )
        inputs.set_shape([None, self.input_width, None])
        labels.set_shape([None, self.label_width, None])
        return inputs, labels

    def plot(self, model=None, plot_col="Close", max_subplots=3):
        inputs, labels = self.sample_batch

        plt.figure(figsize=(12, 8))
        plot_col_index = self.column_indices[plot_col]
        max_n = min(max_subplots, len(inputs))

        for n in range(max_n):
            plt.subplot(3, 1, n + 1)
            plt.ylabel(f"{plot_col} [scaled]")
            plt.plot(
                self.input_indices,
                inputs[n, :, plot_col_index],
                label="Inputs",
                marker=".",
                zorder=-10,
            )

            if self.label_columns:
                label_col_index = self.label_columns_indices.get(plot_col, None)
            else:
                label_col_index = plot_col_index

            if label_col_index is None:
                continue

            plt.scatter(
                self.label_indices,
                labels[n, :, label_col_index],
                edgecolors="k",
                marker="s",
                label="Labels",
                c="green",
                s=64,
            )

            if model is not None:
                predictions = model(inputs)
                plt.scatter(
                    self.label_indices,
                    predictions[n, :, label_col_index],
                    marker="X",
                    edgecolors="k",
                    label="Predictions",
                    c="red",
                    s=64,
                )

            if n == 0:
                plt.legend()
                plt.savefig(f"plot{self.save_count}.png")
                self.save_count += 1

        plt.xlabel("Date (Day)")
        plt.ylabel("Closing Price (USD)")
        plt.savefig(f"plot{self.save_count}.png")
        self.save_count += 1

    def make_dataset(self, data):
        data = np.array(data, dtype=np.float32)
        ds = tf.keras.preprocessing.timeseries_dataset_from_array(
            data=data,
            targets=None,
            sequence_length=self.total_window_size,
            sequence_stride=1,
            shuffle=True,
            batch_size=32,
        )
        ds = ds.map(self.split_to_inputs_labels)
        return ds

    @property
    def train(self):
        return self.make_dataset(self.train_df)

    @property
    def val(self):
        return self.make_dataset(self.val_df)

    @property
    def test(self):
        return self.make_dataset(self.test_df)

    @property
    def sample_batch(self):
        result = getattr(self, "_sample_batch", None)
        if result is None:
            result = next(iter(self.train))
            self._sample_batch = result
        return result
