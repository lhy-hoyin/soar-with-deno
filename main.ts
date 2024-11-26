/*
import { Application, Router } from "jsr:@oak/oak@17.1.3";
const router = new Router();
const app = new Application();

router.get("/", (ctx) => {
    ctx.response.body = "Hello, World!\n";
})

app.use(router.allowedMethods());
app.use(router.routes());

/*/
import express from "npm:express@4.21.1";
const app = express();

app.get("/", (_req, res) => {
        res.send("Hello, World!\n");
});
/**/


if (import.meta.main) {
    app.listen({ port: 8080 });
}