import { FastifyInstance } from "fastify";

const artifactsRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/v8/artifacts/events");
  fastify.get("/v8/artifacts/status");
  fastify.post("/v8/artifacts");
  fastify.put("/v8/artifacts/{hash}");
  fastify.get("/v8/artifacts/{hash}");
};

export { artifactsRoutes };
