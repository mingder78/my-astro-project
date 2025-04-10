// pages/[...slugs].ts
import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { getUsers } from "../db/helper"; // Adjust the import path as necessary

const app = new Elysia( {
    prefix: "/api",
})
  .use(swagger())
  .get("/getUsers", () => getUsers())
  .post("/user", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

const handle = ({ request }: { request: Request }) => app.handle(request);

export const GET = handle;
export const POST = handle;
