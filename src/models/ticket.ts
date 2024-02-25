import { models, Schema, model } from 'mongoose';

const TicketSchema = new Schema({
    createdAt: Date || undefined,
    resolvedTimestamp: Date || undefined,
    completionTimestamp: Date || undefined,
    likes: [String],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subdomain: String,
    images: [{
        url: String,
        filename: String
    }]
}, { collection: 'tickets' });

const Ticket = models.Ticket || model('Ticket', TicketSchema);

export default Ticket;
