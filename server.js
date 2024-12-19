const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/send-notification", (req, res) => {
    const { title, message } = req.body;
    if (!title || !message) {
        return res.status(400).send({ error: "Missing title or message" });
    }

    console.log(`Notification: ${title} - ${message}`);
    res.send({ success: true, message: "Notification sent successfully!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
