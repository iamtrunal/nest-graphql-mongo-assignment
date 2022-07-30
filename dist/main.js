"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    const logger = new common_1.Logger('App');
    logger.log('Graphql Endpoint exposed http://localhost:3000/graphql');
}
bootstrap();
//# sourceMappingURL=main.js.map