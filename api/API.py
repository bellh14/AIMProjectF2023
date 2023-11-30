from typing import Union

from pydantic import BaseModel
from requests import request

from fastapi import FastAPI

app = FastAPI()

class Test(BaseModel):
    title: str
    body: str
    id: int

class TestOut(BaseModel):
    response: str

class StockForm(BaseModel):
    stock: str
    start_date: str
    end_date: str

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/api/test")
def read_test_post(test: Test):
    print(test)
    return "works"

@app.post("/api/stocks")
def read_stock_post():
    raise NotImplementedError


@app.post("/api/sales")
def read_sales_post():
    raise NotImplementedError

@app.post("/api/employee-atrittion")
def read_employee_atrittion_post():
    raise NotImplementedError

@app.post("/api/bankruptcy")
def read_bankruptcy_post():
    raise NotImplementedError