const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { OpenAI } = require("openai");
const PptxGenJS = require("pptxgenjs");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/generate-slides", async (req, res) => {
    try {
        const { text } = req.body;

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: `Generate structured slide points from: ${text}` }],
            max_tokens: 300,
        });

        const slides = response.choices[0].message.content.split("\n").filter(Boolean);

        res.json({ slides });
    } catch (error) {
        res.status(500).json({ error: "Error generating slides" });
    }
});

app.post("/export-ppt", async (req, res) => {
    try {
        const { slides } = req.body;
        let pptx = new PptxGenJS();

        slides.forEach((slideText, index) => {
            let slide = pptx.addSlide();
            slide.addText(slideText, { x: 1, y: 1, fontSize: 24 });
        });

        pptx.writeFile("Generated_Presentation.pptx");
        res.json({ message: "PPT generated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error generating PPT" });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));

