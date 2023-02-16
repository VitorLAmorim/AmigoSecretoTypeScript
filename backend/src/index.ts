import express from "express";
import { connectToDatabase } from "./Services/database.services"
import { pessoasRouter } from "./Controller/routes";
import cors from "cors";
import { errorHandler } from "./Middleware/errors";
import { notFoundHandler } from "./Middleware/not-found"

const app = express();
app.use(cors());
app.use(errorHandler);
//app.use(notFoundHandler);
const port = 8080; // default port to listen



connectToDatabase()
    .then(() => {
        app.use("/home", pessoasRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });