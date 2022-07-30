"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoClientFactory = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const mongoClientFactory = async () => {
    const logger = new common_1.Logger('MongoClient');
    const url = 'mongodb://localhost:27017/nest';
    logger.log(`connecting to ${url}`);
    const client = new mongodb_1.MongoClient(url);
    await client.connect();
    logger.log(`connected to ${url}`);
    return client;
};
exports.mongoClientFactory = mongoClientFactory;
//# sourceMappingURL=mongo-client.factory.js.map