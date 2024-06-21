export type LoanRequest = {
  loanValue: number;
  term: number;
};

export type LenderType = {
  id: number;
  name: string;
  interestRate: number;
  fee: string;
};

export type LenderOfferType = LenderType & {
  monthlyRepayment: number;
};
