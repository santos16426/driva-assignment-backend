import { LenderType } from "../types";

export const lenders: LenderType[] = [
  { id: 1, name: 'Lender A', interestRate: 5.5, fee: '$10 processing fee' },
  { id: 2, name: 'Lender B', interestRate: 5.0, fee: '$15 application fee' },
  { id: 3, name: 'Lender C', interestRate: 6.0, fee: 'No fees' }
];

export const getLenderById = (id: string): LenderType | undefined => {
  return lenders.find(lender => lender.id === parseInt(id));
};