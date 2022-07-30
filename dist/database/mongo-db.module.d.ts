import { OnModuleDestroy } from '@nestjs/common';
import { MongoClient } from 'mongodb';
export declare class MongoModule implements OnModuleDestroy {
    private readonly client;
    constructor(client: MongoClient);
    onModuleDestroy(): Promise<void>;
}
