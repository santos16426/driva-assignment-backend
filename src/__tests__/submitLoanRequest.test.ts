import {submitLoanRequest} from '../controllers/offerController'

import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { validationResult } from 'express-validator';
import { getLenderById } from '../services';

const mockRequest = (overrides?: Partial<ExpressRequest>): ExpressRequest => {
  const request = { params: {}, body: {} } as ExpressRequest;
  return Object.assign(request, overrides);
};

const mockResponse = (): ExpressResponse => {
  const response = {} as ExpressResponse;
  response.status = jest.fn().mockReturnValue(response);
  response.json = jest.fn().mockReturnValue(response);
  response.send = jest.fn().mockReturnValue(response);
  return response;
};

const mockValidationResult = validationResult as jest.MockedFunction<typeof validationResult>;
const mockGetLenderById = getLenderById as jest.MockedFunction<typeof getLenderById>;
jest.mock('express-validator');
jest.mock('../services');

describe('submitLoanRequest', () => {
  it('should return 201 and calculate lender offer', () => {
    mockValidationResult.mockReturnValueOnce({
      array: ()=> []
    } as any);
    mockGetLenderById.mockReturnValueOnce({
      id: 1,
      name: 'Lender A' ,
      interestRate: 5,
      fee: '',
    })

    const mockCalculate = jest.fn().mockReturnValueOnce({ offer: 'Mock Offer' });
      jest.mock('../utils/generateLenderOffers', () => ({
        calculate: mockCalculate,
      }));
    const req = mockRequest({
      params: { id: '1' },
      body: { loanValue: 10000, term: 7 },
    });
    const res = mockResponse();

    submitLoanRequest(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalled();
  });

  it('should return 400 with validation errors', () => {
    mockValidationResult.mockReturnValueOnce({
      isEmpty: () => false,
      array: () => [{ msg: 'Validation error' }],
    } as any);
    const req = mockRequest({
      params: { id: '1' },
      body: { loanValue: 10000, term: 8 },
    });
    const res = mockResponse();

    submitLoanRequest(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ errors: expect.any(Array) });
  });

  it('should return 404 if lender ID is invalid', () => {
    mockValidationResult.mockReturnValueOnce({
      array: ()=> []
    } as any);

    mockGetLenderById.mockReturnValueOnce(undefined);

    const req = mockRequest({
      params: { id: '9999' },
      body: { loanValue: 10000, term: 7 },
    });

    const res = mockResponse();

    submitLoanRequest(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Lender not found' });
  });
});
