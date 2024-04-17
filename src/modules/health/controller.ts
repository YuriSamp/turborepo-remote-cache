import { FastifyReply, FastifyRequest } from "fastify";

const makeHealthCheck = async (
  _request: FastifyRequest,
  reply: FastifyReply
) => {
  const responseBody = {
    status: "OK",
  };

  return reply.status(200).send(responseBody);
};

export default { makeHealthCheck };
