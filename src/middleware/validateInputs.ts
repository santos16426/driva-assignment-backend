import { body } from "express-validator";

export const validateLoanRequest = [
  body('loanValue').isNumeric().withMessage('Loan value must be a number')
                  .custom(value => value > 2000).withMessage('Loan value must be greater than 2000'),
  body('term').isInt({ min: 1 }).withMessage('Term must be a positive integer')
                  .custom(value => value < 8).withMessage('Term value must be less than 8'),
];