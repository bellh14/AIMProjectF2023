import pandas as pd
import tensorflow as tf
import os


class Handler():

    def predictStocks(stockInput: StockForm) -> dict:
        print(stockTicker)
        print(date)
        return {"Stock": "appl", "Close": 100}

    def predictSales(salesInput: SalesForm):
        print(salesInput)
        return {"Estimated sales": 100000}
    
    def predictEmployeeAttrition(employeeAttritionInput: EmployeeAttritionForm):
        print(employeeAttritionInput)
        return {"EmployeeAttrition": "True"}

    