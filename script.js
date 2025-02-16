const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/download", async (req, res) => {
    const { url } = req.body;
    if (!url.includes("soundcloud.com")) return res.json({ success: false });

    try {
        const apiUrl = `https://api.example.com/convert?url=${encodeURIComponent(url)}`;  // Use a third-party API
        const response = await axios.get(apiUrl);
        if (response.data && response.data.downloadUrl) {
            res.json({ success: true, downloadUrl: response.data.downloadUrl });
        } else {
            res.json({ success: false });
        }
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
