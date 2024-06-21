import { body, param } from 'express-validator';

export const sanitizeInputs = [
  body('loanValue').isNumeric().trim().escape(),
  body('term').isInt({ min: 1 }).trim().escape(),
];
