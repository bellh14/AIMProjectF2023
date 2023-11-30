import React from "react";
import FormTemplate from "./FormTemplate";

type Props = {};

const Advisor = (props: Props) => {
    return (
        <section className="relative mt-40 items-center flex flex-col w-3/5 text-center left-1/2 -translate-x-1/2">
            <FormTemplate id="Stocks" name="Stocks" />
            <FormTemplate id="Sales" name="Sales Info" />
            <FormTemplate id="Bankruptcy" name="Bankruptcy" />
            <FormTemplate id="Employee-Atrition" name="Employee Atrition" />
            <FormTemplate id="FinGPT" name="FinGPT" />
        </section>
    );
};

export default Advisor;
