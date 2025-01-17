import {PrismaClient} from '@prisma/client';
import {logger} from "./logging.js";

export const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "error",
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "warn"
        }
    ]
});

prismaClient.$on("error", (e) => {
    logger.error(e);
})