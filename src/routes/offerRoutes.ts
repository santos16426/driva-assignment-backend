import { Router } from 'express';
import { submitLoanRequest, validateLoanRequest, getLendersList } from '../controllers/offerController';
import { sanitizeInputs } from '../middleware/sanitizeInputs';

const router = Router();
router.get('/', (req,res) => { res.send('Hello world!') })
router.get('/offers', getLendersList);
router.post('/submit/:id', sanitizeInputs, validateLoanRequest, submitLoanRequest);

export default router;
