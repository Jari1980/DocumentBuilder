const express = require("express");
const path = require("path");
const { fillTemplate} = require("./services/templateProcessor");

const app = express();
app.use(express.json());

app.post("/generate", (req, res) => {
    const data = req.body;

    const templatePath = path.join(__dirname, "templates", "report.odt");
    const outputPath = path.join(__dirname, "output", `result-${Date.now()}.odt`);

    try {
        fillTemplate(templatePath, outputPath, data);
        res.json({
            message: "Document generated",
            file: outputPath
        });
    } catch(err) {
        console.log(err);
        res.status(500).send("Error generating document");
    }
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});