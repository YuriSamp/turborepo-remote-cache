import { FastifyReply, FastifyRequest } from "fastify";

export const authMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { authorization } = request.headers;

  if (request.url.match("/health")) {
    return;
  }

  if (!authorization) {
    reply.status(401).send({ error: "authorization header não encontrado" });
  }

  const token = authorization?.split("Bearer ")[1];

  if (!token) {
    reply.status(401).send({ error: "token não informado" });
  }

  if (token !== process.env.token) {
    reply.status(401).send({ error: "token invalido" });
  }
};
