"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLenderOffers = generateLenderOffers;
const services_1 = require("../services");
function generateLenderOffers(loanValue, term) {
    return services_1.lenders.map(lender => (Object.assign(Object.assign({}, lender), { monthlyRepayment: calculateMonthlyRepayment(loanValue, term, lender.interestRate) })));
}
function calculateMonthlyRepayment(loanValue, term, annualRate) {
    const monthlyRate = annualRate / 100 / 12;
    const monthlyRepayment = (loanValue * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    return Math.round(monthlyRepayment * 100) / 100;
}
