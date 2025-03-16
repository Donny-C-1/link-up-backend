import "dotenv/config";
import express from "express";
import router from "./routers/indexRouter.js";

const app = express();

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
});

export default app;
