import { Router } from "express";
import { sendMessageToLLM } from "../controllers/messageController.js";

const router = Router();

router.route("/").get((req, res) => {
    res.send("Chat Backend");
});

router.route("/sendMessage").post(sendMessageToLLM);

export default router;
