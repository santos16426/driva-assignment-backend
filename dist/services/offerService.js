"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOfferById = exports.saveOffer = exports.offers = void 0;
exports.offers = {};
const saveOffer = (id, offer) => {
    exports.offers[id] = offer;
};
exports.saveOffer = saveOffer;
const getOfferById = (id) => {
    return exports.offers[id];
};
exports.getOfferById = getOfferById;
