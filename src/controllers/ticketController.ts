import { Request, Response } from 'express';
import * as tiketDAO from '../dao/ticket-dao';
import { calculateFrequency } from '../utils/utils'

class TicketController {
    public async createTicket(req: Request, res: Response): Promise<void> {
        try {
            const { boxes, numbers, superzahl } = req.body;
            const createdAt = new Date();
            await tiketDAO.create(createdAt, boxes, numbers, superzahl);
            res.status(200).json({message: 'Ticket was created successfully!'});
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async getAllTickets(req: Request, res: Response): Promise<void> {
        try {
            const tickets = await tiketDAO.getAll();
            if (tickets.length > 0) {
                res.status(200).json({tickets});
            } else {
                res.status(404).json({ message: 'Tickets not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async getTicketById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const tickets = await tiketDAO.findById(id);
            res.json(tickets);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async getFrequency(req: Request, res: Response): Promise<void> {
        try {
            const tickets = await tiketDAO.getAllNumbers();
            if (tickets.length > 0) {
                const extractedNumbers = tickets.flatMap((ticket: { numbers: any[]; }) =>
                    ticket.numbers.flatMap((arr: any) => arr)
                );
                const frequency = calculateFrequency(extractedNumbers);
                res.status(200).json(frequency);
            } else {
                res.status(404).json({ message: 'Tickets not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new TicketController();
