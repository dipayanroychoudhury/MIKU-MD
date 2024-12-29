const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID |lStQzQQB#klbeK9k4c48HGDOfJRgf3u2fiRG-R_RibPwzkG9hOWM| "EC1l1RKZ#iIk20jIp2r7-3tmLs0h2qfqTCnPfenAgsis_CVXc-3w",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/n5vvij.jpg",
SUDO_NB: process.env.SUDO_NB || "918509459407",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "privet",
AUTO_VOICE: "falce"
};
GIF_TO_STICKER: "true"
STICKER_TO_GIF: "true'
PREFIX: "~"
