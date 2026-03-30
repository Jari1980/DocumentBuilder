const AdmZip = require("adm-zip");
const fs = require("fs");
const path = require("path");

function fillTemplate(templatePath, outputPath, data){
    const zip = new AdmZip(templatePath);
    //Read content.xml
    let contentXml = zip.readAsText("content.xml");
    //Replace placeholders
    Object.keys(data).forEach((key) => {
    const regex = new RegExp(`{{${key}}}`, "g"); 
    contentXml = contentXml.replace(regex, data[key]);
    });
    //Update file inside zip
    zip.updateFile("content.xml", Buffer.from(contentXml, "utf-8"));
    //Save new document
    zip.writeZip(outputPath);
}

module.exports = { fillTemplate};