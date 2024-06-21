import { LenderOfferType, LoanRequest } from "./Lender";

export type Offer = {
  loanRequest: LoanRequest;
  offers: LenderOfferType[];
}