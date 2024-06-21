import { LenderOfferType, LenderType } from '../types';

export const calculate = (loanValue: number, term: number, lender: LenderType ): LenderOfferType => {
  return {
    ...lender,
    monthlyRepayment: calculateMonthlyRepayment(loanValue, term, lender.interestRate)
  }
}

function calculateMonthlyRepayment(loanValue: number, term: number, annualRate: number): number {

  const monthlyRate = annualRate/ 100 / 12;
  const numberOfPayments = term * 12
  const monthlyRepayment = (loanValue * monthlyRate) / (1 - Math.pow( 1 + monthlyRate, -numberOfPayments ))
  return Math.round(monthlyRepayment * 100) / 100
}
