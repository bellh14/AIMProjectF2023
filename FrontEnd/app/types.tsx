export type stockFormData = {
    stockTicker: string;
    date: Date;
};

export type saleFormData = {
    gender: string;
    transactionAmount: number;
    merchantName: string;
    category: string;
    age: number;
    month: number;
    year: number;
};

export type bankruptcyFormData = {
    currentRatio: number;
    operatingCashFlow: number;
    debtRatio: number;
    yearsAtCompany: number;
};

export type employeeAttritionFormData = {
    age: number;
    businessTravel: string;
    department: string;
    maritalStatus: string;
    monthlyIncome: number;
};
