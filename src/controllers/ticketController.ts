import { Request, Response } from 'express';
import Ticket from '../models/ticket';
import * as tiketDAO from '../dao/ticket-dao';

class TicketController {
    public async createTicket(req: Request, res: Response): Promise<void> {
        try {
            const { boxes, numbers, superzahl } = req.body;
            const ticket: typeof Ticket = await tiketDAO.create({
                boxes,
                numbers,
                superzahl
            });
            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // public async getTicketById(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { id } = req.params;
    //         const ticket: Ticket | null = await tiketDAO.findById(id);
    //         if (ticket) {
    //             res.json(ticket);
    //         } else {
    //             res.status(404).json({ message: 'Ticket not found' });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ message: 'Internal server error' });
    //     }
    // }
    //
    // public async getAllTickets(req: Request, res: Response): Promise<void> {
    //     try {
    //         const tickets: Ticket[] = await tiketDAO.find();
    //         res.json(tickets);
    //     } catch (error) {
    //         res.status(500).json({ message: 'Internal server error' });
    //     }
    // }
}

export default new TicketController();
