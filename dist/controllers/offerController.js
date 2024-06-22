"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoanOffer =
  exports.submitLoanRequest =
  exports.validateLoanRequest =
    void 0;
const express_validator_1 = require("express-validator");
const generateLenderOffers_1 = require("../utils/generateLenderOffers");
const offerService_1 = require("../services/offerService");
// Validation middleware
exports.validateLoanRequest = [
  (0, express_validator_1.body)("loanValue")
    .isNumeric()
    .withMessage("Loan value must be a number"),
  (0, express_validator_1.body)("term")
    .isInt({ min: 1 })
    .withMessage("Term must be a positive integer"),
];
// Controller method to handle loan offer submission
const submitLoanRequest = (req, res) => {
  const errors = (0, express_validator_1.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { loanValue, term } = req.body;
  const id = Date.now().toString();
  const lenderOffers = (0, generateLenderOffers_1.generateLenderOffers)(
    loanValue,
    term
  );
  (0, offerService_1.saveOffer)(id, {
    loanRequest: { loanValue, term },
    offers: lenderOffers,
  });
  res.status(201).json({ id, offers: lenderOffers });
};
exports.submitLoanRequest = submitLoanRequest;
// Controller method to retrieve loan offer by ID
const getLoanOffer = (req, res) => {
  const { id } = req.params;
  const offer = (0, offerService_1.getOfferById)(id);
  if (offer) {
    res.json(offer);
  } else {
    res.status(404).json({ message: "Offer not found" });
  }
};
exports.getLoanOffer = getLoanOffer;
