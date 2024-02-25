import * as database from '../utils/database';

export const create = async (ticket: any): Promise<any> => {
    const db = database.getDb();
    db.collection('tickets').insertOne({ticket});
}
