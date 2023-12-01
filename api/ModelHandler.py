import pandas as pd
import tensorflow as tf
import os


class Handler():

    def predictStocks(self, stockTicker: str, date: str) -> dict:
        print(stockTicker)
        print(date)
        return {"Stock": "appl", "Close": 100}

    