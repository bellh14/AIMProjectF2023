"use client";
import React, { useState } from "react";
import FormTemplate from "./FormTemplate";
import { stockFormData } from "../types";
import { createTestPost } from "../api/API";
import { Button } from "antd";

type Props = {};

const Advisor = (props: Props) => {
    const [stocks, setStocks] = useState({} as stockFormData);
    const [sales, setSales] = useState(0);
    const [bankruptcy, setBankruptcy] = useState(0);
    const [employeeAtrition, setEmployeeAtrition] = useState(0);
    const [finGPT, setFinGPT] = useState(0);

    async function handleStockSubmit(e: any) {
        e.preventDefault();
        console.log("Stocks: ", stocks);
    }

    return (
        <section className="relative mt-40 items-center flex flex-col w-3/5 text-center left-1/2 -translate-x-1/2">
            <div className="flex flex-col justify-center">
                <FormTemplate
                    id="Stocks"
                    name="Stocks"
                    onChange={(e) => setStocks(e)}
                />
                <Button className="text-2xl w-1/5 my-8" htmlType="submit" type="primary" onClick={(e) => handleStockSubmit(e)}/>
            </div>

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
