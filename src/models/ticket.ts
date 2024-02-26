import { models, Schema, model } from 'mongoose';

const TicketSchema = new Schema({
    createdAt: Date,
    boxes: Number,
    numbers: [[Number]],
    superzahl: Number
}, { collection: 'tickets' });

const Ticket = models.Ticket || model('Ticket', TicketSchema);

export default Ticket;
