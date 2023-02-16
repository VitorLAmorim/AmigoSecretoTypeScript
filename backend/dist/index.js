"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_services_1 = require("./Services/database.services");
const routes_1 = require("./Controller/routes");
const cors_1 = __importDefault(require("cors"));
const errors_1 = require("./Middleware/errors");
const not_found_1 = require("./Middleware/not-found");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(errors_1.errorHandler);
app.use(not_found_1.notFoundHandler);
const port = 8080; // default port to listen
(0, database_services_1.connectToDatabase)()
    .then(() => {
    app.use("/home", routes_1.pessoasRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map