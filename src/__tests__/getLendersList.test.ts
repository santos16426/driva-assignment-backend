import { Request, Response } from 'express';
import { getLendersList } from '../controllers/offerController';

jest.mock('../services', () => ({
  lenders: [
    { id: 1, name: 'Lender A', interestRate: 5.5, fee: '$10 processing fee' },
    { id: 2, name: 'Lender B', interestRate: 5.0, fee: '$15 application fee' },
    { id: 3, name: 'Lender C', interestRate: 6.0, fee: 'No fees' }
  ]
}));

const mockRequest = (): Partial<Request> => ({});

const mockResponse = (): Partial<Response> => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('getLendersList', () => {
  it('should return the list of lenders', () => {
    const req = mockRequest() as Request;
    const res = mockResponse() as Response;

    getLendersList(req, res);

    expect(res.json).toHaveBeenCalledWith([
      { id: 1, name: 'Lender A', interestRate: 5.5, fee: '$10 processing fee' },
      { id: 2, name: 'Lender B', interestRate: 5.0, fee: '$15 application fee' },
      { id: 3, name: 'Lender C', interestRate: 6.0, fee: 'No fees' }
    ]);
  });
});
