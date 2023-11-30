"use client";
import React, { useState } from "react";
import FormTemplate from "./FormTemplate";
import {
    stockFormData,
    saleFormData,
    employeeAttritionFormData,
    bankruptcyFormData,
} from "../types";
import { createTestPost } from "../api/API";
import { Button } from "antd";

type Props = {};

const Advisor = (props: Props) => {
    const [stocks, setStocks] = useState({} as stockFormData);
    const [sales, setSales] = useState({} as saleFormData);
    const [bankruptcy, setBankruptcy] = useState({} as bankruptcyFormData);
    const [employeeAtrition, setEmployeeAtrition] = useState({} as employeeAttritionFormData);
    const [finGPT, setFinGPT] = useState(0);

    async function handleStockSubmit(e: any) {
        e.preventDefault();
        console.log("Stocks: ", stocks);
    }

    return (
        <section className="relative mt-40 items-center flex flex-col w-3/5 text-center left-1/2 -translate-x-1/2">
            <FormTemplate
                id="Stocks"
                name="Stocks"
                onChange={(e) => setStocks(e)}
            />

            <FormTemplate
                id="Sales"
                name="Sales Info"
                onChange={(e) => setSales(e)}
            />
            <FormTemplate
                id="Bankruptcy"
                name="Bankruptcy"
                onChange={(e) => setBankruptcy(e)}
            />
            <FormTemplate
                id="Employee-Atrition"
                name="Employee Atrition"
                onChange={(e) => setEmployeeAtrition(e)}
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
