const express = require("express");
const cors = require("cors");
const sendEmail = require("./main");
const app = express();
const PORT = 3000;

const corsOptions = {
  origin: [
    "https://coco-cakes.ro",
    "http://127.0.0.1:5500",
    "http://localhost:3000",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { senderName, senderEmail, userMessage, phoneNumber } = req.body;

  try {
    sendEmail({ senderName, senderEmail, userMessage, phoneNumber });
    res.status(200).json({ message: "Email trimis cu succes!" });
  } catch (err) {
    console.error("Eroare la trimitere:", err);
    res.status(500).json({ message: "Eroare la trimiterea emailului." });
  }
});

app.listen(PORT, () => {
  console.log(`Serverul ascultă pe portul ${PORT}`);
});
