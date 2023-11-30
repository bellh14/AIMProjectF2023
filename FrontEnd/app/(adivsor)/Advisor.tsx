import React, { useState } from "react";
import FormTemplate from "./FormTemplate";
import { testPost } from "../types";
import { createTestPost } from "../api/API";

type Props = {};

const Advisor = (props: Props) => {

    const [test, setTest] = useState(0); // [state, setState
    const [stocks, setStocks] = useState(0);
    const [sales, setSales] = useState(0);
    const [bankruptcy, setBankruptcy] = useState(0);
    const [employeeAtrition, setEmployeeAtrition] = useState(0);
    const [finGPT, setFinGPT] = useState(0);

    async function handleStockSubmit(e: any){
        e.preventDefault();
        const testPost: testPost = {
            title: "test",
            body: "test",
            id: 0,
        }
        const data = await createTestPost(testPost);
        console.log(data);
    }

    return (
        <section className="relative mt-40 items-center flex flex-col w-3/5 text-center left-1/2 -translate-x-1/2">
            <FormTemplate id="Test" name="Test" onChange={(e) => setTest(e)}/>
            <FormTemplate id="Stocks" name="Stocks" onChange={(e) => setStocks(e)}/>
            <FormTemplate id="Sales" name="Sales Info" onChange={(e) => setSales(e)}/>
            <FormTemplate id="Bankruptcy" name="Bankruptcy" onChange={(e) => setBankruptcy(e)}/>
            <FormTemplate id="Employee-Atrition" name="Employee Atrition" onChange={(e) => setEmployeeAtrition(e)}/>
            <FormTemplate id="FinGPT" name="FinGPT" onChange={(e) => setFinGPT(e)}/>
        </section>
    );
};

export default Advisor;
