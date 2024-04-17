import { FastifyInstance } from "fastify";

import healthController from "./controller.js";

const healthRoute = async (fastify: FastifyInstance) => {
  fastify.get("/health", healthController.makeHealthCheck);
};

export { healthRoute };
