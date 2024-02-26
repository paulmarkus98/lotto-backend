import * as database from '../utils/database';
import {ObjectId} from 'mongodb';

export const create = async (createdAt: Date, boxes: any, numbers: any, superzahl: any): Promise<any> => {
    try {
        const db = database.getDb();
        const ticketData: any = {createdAt, boxes, numbers};
        if (superzahl !== undefined) {
            ticketData.superzahl = superzahl;
        }
        await db.collection('tickets')
            .insertOne(ticketData);
    } catch (error) {
        throw error;
    }
}

export const findById = async (id: any): Promise<any> => {
    try {
        const db = database.getDb();
        return await db.collection('tickets')
            .findOne(
                { _id: new ObjectId(id) },
                {
                    projection:
                        { _id: 0, boxes: 1, numbers: 1, superzahl: 1 }
                }
            );
    } catch (error) {
        console.log("error: ", error);
    }
}

export const getAll = async (): Promise<any> => {
    try {
        const db = database.getDb();
        return await db.collection('tickets')
            .find(
                { },
                { projection: { _id: 1 }} ).toArray();
    } catch (error) {
        console.log("error: ", error);
    }
}

export const getAllNumbers = async (): Promise<any> => {
    try {
        const db = database.getDb();
        return await db.collection('tickets')
            .find(
                { },
                { projection: { _id: 0, numbers: 1 }} ).toArray();
    } catch (error) {
        console.log("error: ", error);
    }
}
