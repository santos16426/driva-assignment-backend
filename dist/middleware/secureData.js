"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secureData = void 0;
const secureData = (req, res, next) => {
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    next();
};
exports.secureData = secureData;
