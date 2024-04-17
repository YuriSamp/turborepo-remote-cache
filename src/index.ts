import cors from "@fastify/cors";
import fastify from "fastify";

import { artifactsRoutes } from "./modules/artifacts/routes.js";
import { authMiddleware } from "./shared/auth.middleware.js";

const app = fastify({
  logger: {
    transport: {
      target: "@fastify/one-line-logger",
    },
  },
});

app.addHook("preHandler", authMiddleware);

app.register(artifactsRoutes);
app.register(cors);

await app.listen();
