import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router: Router = Router();

router.post('/ticket', TicketController.createTicket);
router.get('/tickets', TicketController.getAllTickets);
router.get('/ticket/:id', TicketController.getTicketById);
router.get('/frequency', TicketController.getFrequency);

export default router;
