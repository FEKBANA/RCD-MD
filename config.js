//#ENJOY

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94770025374@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://nico:PcTVuK0HAsidxKpBVzgaEK25AowJsh88@dpg-cqignbqj1k6c739ehkq0-a.oregon-postgres.render.com/nicorcdmd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/XAlanWalkerX/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94770025374";
global.sudo = process.env.SUDO || "94770025374,94743481092";
global.owner = process.env.OWNER_NUMBER || "94715991145";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09pU0RpNDh5Y0FaM1h2bWdLQjZQSmJxS25SZTFTV1ptVlpFaXJGY2RWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGJaNXJNZ2ljbFRtdGhFOHd5TTE3R2ErNUF4c3BrM3l3YTZaT0FtUkVBQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTHhqT3JUSzg3d3hyVmplQXkzRjZKWUF1UDk3ZUdxMmtzU2Y5aXpVSVZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3cnJ2ZzZ4cnE2V2FpTVZ0c2EvdnFRZU1aVjFpeDB5aXpseFpxTWp1NUI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFU2VxK3NYK2pMdWphc2FDcjh0TEhnS2VFeTk2SjBoc1BIdUJlbk5HWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMyNVlYK3NKZG5hQmpWZkdqd25VSE5QMlkzc2VURmY4Z1V4SDNvSDYxMEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9VTmVhOGZmNDkwbXhiZTRNU1FvWDZKMGc5WWcrd3dOR085NnJUOEYyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2pia1BJNW9PaWlmdEtBWmtrYWZ4dUswRGEwdnJmTVZqMUU0L0IxSCtGST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNOMlA1aEI1TmhucUtBdnVzbm42R0hUUkt2VG1RWnViWC9SQnUyMGd6dzFlM1lGQ3pOcmZ5aEIrcVRhWTQyTGhmSitUcVMyNVlFeGdXWlR3SFg4Q0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiUVVpbFhrNXVUMmphc2dIRDhhK0xvZG9hYW13MHRBWWhJZEJWUmVTMTdnST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSE9QUWg3amtRbjY3T0Z1V25tNUNMdyIsInBob25lSWQiOiI3Nzk5NzJlNi1mYWU4LTRiYzgtODlmNi1jNzhlN2UyYjJmYzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3ZwK3VMTHFHb3BUNHJsazluQzY5ZnVyd2I4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk0Qy9Ydmg1SzRNRkhuRE5TdHBSTm5pTTdSMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWUzY3SEhESCIsIm1lIjp7ImlkIjoiOTQ3MTU5OTExNDU6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUtMamdvUTdwcWt0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRTl3L3RVUHZUSVBGT2tJYU1McDVSQ1ZqRVVtQ05lQWg2Q2EzcnNlRnF3ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNEhlQXg1R1BzOU1hYnF3ak5tUGwwZ0tOQVpkdmtqNnI5QTduVEQrR3RjQnZRYTF2RFhnd1hKVWFrZ21PQ3E1eG5pRU45M0d4VUxLU0FXVUR0MFZ0QUE9PSIsImRldmljZVNpZ25hdHVyZSI6InhnYSt0K0hydnNNRUtHTHlqcXdLNEorV3doRzlTUWFUbEZxbkE5SVJueFBFQ0dJbXFOcWNzS3BFR25mMVpqN0lSQXFPcGpNKzFyc2JGM1RrZ1ZlZEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTU5OTExNDU6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUGNQN1ZENzB5RHhUcENHakM2ZVVRbFl4RkpnalhnSWVnbXQ2N0hoYXNPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzU1MDcyfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.1 Beta (By NICO)",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "SENUFAKEBAN",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94770025374",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
