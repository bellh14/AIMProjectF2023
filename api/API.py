from typing import Union

from pydantic import BaseModel
from requests import request

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

class Test(BaseModel):
    title: str
    body: str
    id: int


class TestOut(BaseModel):
    response: str


class StockForm(BaseModel):
    stockTicker: str
    date: str


class SalesForm(BaseModel):
    gender: str
    transactionAmount: float
    merchantName: str
    category: str
    age: int
    month: int
    year: int


class EmployeeAttritionForm(BaseModel):
    age: int
    businessTravel: str
    department: str
    maritalStatus: str
    monthlyIncome: int


class BankruptcyForm(BaseModel):
    currentRatio: float
    operatingCashFlow: float
    debtRatio: float


@app.post("/api/stocks")
def read_stock_post(stockInput: StockForm):
    print(stockInput)
    return {"Stock": "appl", "Close": 100}


@app.post("/api/sales")
def read_sales_post(saleInput: SalesForm):
    print(saleInput)
    return {"Estimated sales": 100000}


@app.post("/api/employee-attrition")
def read_employee_atrittion_post(employeeAttritionInput: EmployeeAttritionForm):
    print(employeeAttritionInput)
    return {"EmployeeAttrition": "True"}


@app.post("/api/bankruptcy")
def read_bankruptcy_post(bankruptcyInput: BankruptcyForm):
    print(bankruptcyInput)
    return {"Bankruptcy": "True"}
