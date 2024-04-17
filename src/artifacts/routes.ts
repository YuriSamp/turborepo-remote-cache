import { FastifyInstance } from "fastify";

const artifactsRoutes = (fastify: FastifyInstance) => {
  fastify.post("/v8/artifacts/events");
  fastify.get("/v8/artifacts/status");
  fastify.post("/v8/artifacts");
  fastify.put("/v8/artifacts/{hash}");
  fastify.get("/v8/artifacts/{hash}");
  fastify.head("/v8/artifacts/{hash");
  fastify.get("/health");
};

export { artifactsRoutes };
