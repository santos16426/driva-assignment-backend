"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const offerController_1 = require("../controllers/offerController");
const sanitizeInputs_1 = require("../middleware/sanitizeInputs");
const router = (0, express_1.Router)();
router.post('/submit', sanitizeInputs_1.sanitizeInputs, offerController_1.validateLoanRequest, offerController_1.submitLoanRequest);
router.get('/offers/:id', offerController_1.getLoanOffer);
exports.default = router;
