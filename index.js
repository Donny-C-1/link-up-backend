import "dotenv/config";
import express from "express";
import router from "./routers/indexRouter.js";
import http from "http";
import cors from "cors";
import { Server as WebSocketServer } from "socket.io";

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST"]
    })
);

const server = http.createServer(app);
const io = new WebSocketServer(server, {
    cors: {
        origin: allowedOrigins,
        methods: ["GET", "POST"]
    }
});
const users = new Map();

app.use(router);

io.on("connection", socket => {
    console.log(`A user is connected. Socket Id: ${socket.id}`);

    socket.on("register_user", username => {
        users.set(socket.id, username);
        io.emit("users_update", Array.from(users.values()));
    });

    socket.on("send_message", data => {
        io.emit("receive_message", data); //broadcast to all users
    });

    socket.on("disconnect", () => {
        users.delete(socket.id);
        io.emit("users_update", Array.from(users.values()));
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
});

export default app;
