import { httpServer } from "./src/http_server/index.js";
import { WebSocketServer } from "ws";
import { regestration } from "./src/ws_server/index.js";

const HTTP_PORT = 8181;
const WSS_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WSS_PORT });

wss.on("connection", function connection(ws) {
  console.log("WebSocketServer connected!");

  ws.on("error", console.error);

  ws.on("message", (message) => {
    try {
      const parsedMessage = JSON.parse(message);

      if (parsedMessage.type === "reg") {
        ws.send(regestration(parsedMessage));
      }
    } catch (error) {
      console.log(error);
    }
  });
});
