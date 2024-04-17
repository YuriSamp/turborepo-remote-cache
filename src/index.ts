import cors from "@fastify/cors";
import fastify from "fastify";

import { artifactsRoutes } from "./artifacts/routes.js";

const app = fastify({
  logger: {
    transport: {
      target: "@fastify/one-line-logger",
    },
  },
});

app.register(artifactsRoutes);
app.register(cors);

await app.listen();
