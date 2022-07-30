"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoModule = void 0;
const common_1 = require("@nestjs/common");
const mongo_client_factory_1 = require("./mongo-client.factory");
const mongo_db_service_1 = require("./mongo-db.service");
const mongodb_1 = require("mongodb");
let MongoModule = class MongoModule {
    constructor(client) {
        this.client = client;
    }
    async onModuleDestroy() {
        await this.client.close();
    }
};
MongoModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            mongo_db_service_1.MongoDbService,
            {
                provide: mongodb_1.MongoClient,
                useFactory: mongo_client_factory_1.mongoClientFactory,
            },
        ],
        exports: [mongo_db_service_1.MongoDbService],
    }),
    __metadata("design:paramtypes", [mongodb_1.MongoClient])
], MongoModule);
exports.MongoModule = MongoModule;
//# sourceMappingURL=mongo-db.module.js.map