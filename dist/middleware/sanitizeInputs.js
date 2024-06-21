"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeInputs = void 0;
const express_validator_1 = require("express-validator");
exports.sanitizeInputs = [
    (0, express_validator_1.body)('loanValue').isNumeric().trim().escape(),
    (0, express_validator_1.body)('term').isInt({ min: 1 }).trim().escape(),
];
