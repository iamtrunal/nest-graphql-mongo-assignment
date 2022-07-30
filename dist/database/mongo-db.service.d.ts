import { Db, MongoClient } from 'mongodb';
export declare class MongoDbService {
    readonly db: Db;
    constructor(client: MongoClient);
}
