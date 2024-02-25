import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router: Router = Router();

router.post('/tickets', TicketController.createTicket);
// router.get('/tickets/:id', TicketController.getTicketById);
// router.get('/tickets', TicketController.getAllTickets);

export default router;
