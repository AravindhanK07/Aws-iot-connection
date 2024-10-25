const awsIot = require("aws-iot-device-sdk");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const device = awsIot.device({
  keyPath:
    "C:/Users/parka/Desktop/File AK/Intern-tasks/Keys/private key_daloft.key",
  certPath:
    "C:/Users/parka/Desktop/File AK/Intern-tasks/Keys/device certificate_daloft.crt",
  caPath: "C:/Users/parka/Desktop/File AK/Intern-tasks/Keys/AmazonRootCA1.pem",
  clientId: "Daloft_data",
  host: "a3n26f649hzhlb-ats.iot.ap-south-1.amazonaws.com",
});

device.on("connect", function () {
  console.log("Connected to AWS IoT");

  device.subscribe("/device/response", function (err, granted) {
    if (err) {
      console.error("Failed to subscribe:", err);
    } else {
      console.log("Subscribed to /device/response");
    }
  });
});

device.on("error", function (error) {
  console.error("Error: ", error);
});

app.post("/changeCommand", (req, res) => {
  const command = req.body.command;

  device.publish("/device/command", JSON.stringify({ command }), (err) => {
    if (err) {
      console.error("Failed to publish command:", err);
      return res.status(500).send("Failed to send command");
    }
    console.log("Command sent: Daloft");
    res.send("Command updated successfully");
  });
});

device.on("message", function (topic, payload) {
  if (topic === "/device/response") {
    console.log("Received response: " + payload.toString());
  }
});

app.listen(5000, () => {
  console.log("Server started running at port 5000");
});
