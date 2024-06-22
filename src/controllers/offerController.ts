import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { calculate } from '../utils/generateLenderOffers';
import { LoanRequest } from '../types';
import { getLenderById, lenders } from '../services';


export const submitLoanRequest = (req: Request, res: Response) => {
  const errors = validationResult(req).array();
  if (errors.length) {
    return res.status(400).json({ errors });
  }

  const { id } = req.params;
  const lender = getLenderById(id);
  if (!lender) {
    return res.status(404).json({ error: "Lender not found" });
  }
  const { loanValue, term } = req.body as LoanRequest;
  const lenderOffer = calculate(loanValue, term, lender);

  res.status(201).json(lenderOffer);
}
export const getLendersList = (req: Request, res: Response) => {
  res.json(lenders);
}