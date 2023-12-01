"use client";
import React, { useState } from "react";
import FormTemplate from "./FormTemplate";
import {
    stockFormData,
    saleFormData,
    employeeAttritionFormData,
    bankruptcyFormData,
} from "../types";
import {
    createStockPost,
    createSalePost,
    createEmployeeAtritionPost,
    createBankruptcyPost,
} from "../api/API";

type Props = {};

const Advisor = (props: Props) => {
    const [stocks, setStocks] = useState({} as stockFormData);
    const [sales, setSales] = useState({} as saleFormData);
    const [bankruptcy, setBankruptcy] = useState({} as bankruptcyFormData);
    const [employeeAtrition, setEmployeeAtrition] = useState(
        {} as employeeAttritionFormData
    );
    const [finGPT, setFinGPT] = useState(0);

    async function handleStockSubmit(e: any) {
        setStocks(e);
        console.log("Stocks: ", stocks);
        const stockFormData: stockFormData = {
            stockTicker: stocks.stockTicker,
            date: stocks.date,
        };
        console.log("Stock Form Data: ", stockFormData);
        const stockResponse = await createStockPost(stockFormData);
        console.log("Stock Response: ", stockResponse);
    }

    async function handleSalesSubmit(e: any) {
        setSales(e);
        console.log("Sales: ", sales);
        const saleFormData: saleFormData = {
            gender: sales.gender,
            transactionAmount: sales.transactionAmount,
            merchantName: sales.merchantName,
            category: sales.category,
            age: sales.age,
            month: sales.month,
            year: sales.year,
        };
        console.log("Sale Form Data: ", saleFormData);
        const saleResponse = await createSalePost(saleFormData);
        console.log("Sale Response: ", saleResponse);
    }

    async function handleBankruptcySubmit(e: any) {
        setBankruptcy(e);
        console.log("Bankruptcy: ", bankruptcy);
        const bankruptcyFormData: bankruptcyFormData = {
            currentRatio: bankruptcy.currentRatio,
            operatingCashFlow: bankruptcy.operatingCashFlow,
            debtRatio: bankruptcy.debtRatio,
            yearsAtCompany: bankruptcy.yearsAtCompany,
        };
        console.log("Bankruptcy Form Data: ", bankruptcyFormData);
        const bankruptcyResponse = await createBankruptcyPost(
            bankruptcyFormData
        );
        console.log("Bankruptcy Response: ", bankruptcyResponse);
    }

    async function handleEmployeeAtritionSubmit(e: any) {
        setEmployeeAtrition(e);
        console.log("Employee Atrition: ", employeeAtrition);
        const employeeAtritionFormData: employeeAttritionFormData = {
            age: employeeAtrition.age,
            businessTravel: employeeAtrition.businessTravel,
            department: employeeAtrition.department,
            maritalStatus: employeeAtrition.maritalStatus,
            monthlyIncome: employeeAtrition.monthlyIncome,
        };
        console.log("Employee Atrition Form Data: ", employeeAtritionFormData);
        const employeeAtritionResponse = await createEmployeeAtritionPost(
            employeeAtritionFormData
        );
        console.log("Employee Atrition Response: ", employeeAtritionResponse);
    }

    return (
        <section className="relative mt-40 items-center flex flex-col w-3/5 text-center left-1/2 -translate-x-1/2">
            <FormTemplate
                id="Stocks"
                name="Stocks"
                onChange={(e) => handleStockSubmit(e)}
            />

            <FormTemplate
                id="Sales"
                name="Sales Info"
                onChange={(e) => handleSalesSubmit(e)}
            />
            <FormTemplate
                id="Bankruptcy"
                name="Bankruptcy"
                onChange={(e) => handleBankruptcySubmit(e)}
            />
            <FormTemplate
                id="Employee-Attrition"
                name="Employee Attrition"
                onChange={(e) => handleEmployeeAtritionSubmit(e)}
            />
            <FormTemplate
                id="FinGPT"
                name="FinGPT"
                onChange={(e) => setFinGPT(e)}
            />
        </section>
    );
};

export default Advisor;
