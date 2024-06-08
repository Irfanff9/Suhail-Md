const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="irfanbotwa@gmail.com"
global.location="Jawa Timur,Indonesia."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Jakarta";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://avatars.githubusercontent.com/u/93906910?v=4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Irfanbot-MD" 


global.devs = "6289510497533" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6289510497533";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "6289510497533,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SESSION_04_09_06_08_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tBSjBIL0s1WUdTbDJhdnF3Wmt3Uko1S09NZ1JtNjJwZFQyVnNWeVQwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWlvWHYxYTZTdmtiNnNrWmdsYS9XUUQzdjJzL2xMUTJnNFg1SUZnK2EwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRzRBajFvSlcvaVFBUHlvOTBpNnNoMVc4Q2xzekVjUW1zeGVmY3NVVVY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1by9hUXJydmJON0xEMHRrd0hWQm1Bb2p0ZWRlem1PazdIeFdhNGhYdDJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNU1lsOUNERVI4VloyWEliTm03NmlHaVgwcVM1NmRxNjZOemxST3hqa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI0SmlRbDdCNmFGYzJ4NU44S2hYSi9SUlk1OTdjMWVCaHZyb250RkhzUmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJORFNIa2VUUDFXZlpZUFNwV1ZaaXErcjJMamk0eDNDN0E5NUhneEgwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGJpYTM3Rlp4VWFqK0hoMHRWUGZQc2JIa1duZDVOcmxENDdVcU9BVXJqST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZPOWJ2WFM5VEFJZ1VZT1RFOXZOVHZBWmVZSnFVdUVEV2xGS2hTNmxsRS9DTzljV3I3VzNSdVlxL0Y4K09xNWc5RXh6OWJCU3A0RFVWQi9wM2tmYWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiJodmRxamRkM0JEQndjNkFsUjk3S1FUQ0J3T3k1SkpyaDAvZEtlS0gxajhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYyODk2NTk4Nzk5NzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUJCQzI1QjREMDQ2MkIyMTFFRUY4QUMxQTI0OTRDNTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzgxOTczNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4OTY1OTg3OTk3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NzdEMTcyRUM4NkU3MjJBMTUzMkZFQ0ZGRUNEMjc0RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE3ODE5NzM2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI2Mjg5NjU5ODc5OTc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc3RDZGNDkwNjgwMDREMDk0MzFCN0JDQTU4QjkxMDI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTc4MTk3Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjYyODk2NTk4Nzk5NzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDhDOTg1NzJBN0REN0Q2M0IwQzMzNjIyOUI5NDk2NTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzgxOTczOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR0tDUHZIMkZRLUcxSXdNM0xra0tvdyIsInBob25lSWQiOiJkYmU5OGEwNi1mZDk0LTQ4YmMtYjljNS1iNzBmZGNiYzViN2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVRjaVJ4NWVHNTFJbEgzbWR6aGpmZkN6OEJZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhEMmhXR0VqeEhDOTlWajZwUnNDQzF4aGFwND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHWkZOMkJONyIsIm1lIjp7ImlkIjoiNjI4OTY1OTg3OTk3Nzo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhBQ0tLS0VSUlJSUlJSUlJSOTk5OSsrIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeTJ4YTRIRU5XeWo3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtdnNYN0ZkSHBZQ0tsaUpFOUJhbDRnMXlBazQ5QUVlN3prbTJRa1Z0WWd3PSIsImFjY291bnRTaWduYXR1cmUiOiJpLzFtTnpWN2xGdGIyU3dpeE5reWp0eTViMWxvdUU3akpwWWdTOUQvZlZRbXBGZk92aGJDdXpSZU1iMDRXekJLSW9NeEpwT2hWM0l5WVhnWkxrYUVDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVWNsSTVzb3h2bmxSMzBmRks3cXI4d21iTHRhakdRekg5QUw4VVB5bXBLK0lpV2QrSTRxTDZmMWFDVDNVTWFyaTlKUkFIOEVHd3JPYWZFVjNYRTNYZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2Mjg5NjU5ODc5OTc3OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWnI3Rit4WFI2V0FpcFlpUlBRV3BlSU5jZ0pPUFFCSHU4NUp0a0pGYldJTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzgxOTczNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCWk8ifQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "all",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "Irfanff9" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Irfanff9",
  packname: process.env.PACK_NAME || "irfanbottt",
  botname : process.env.BOT_NAME  || "irfanbot",
  ownername:process.env.OWNER_NAME|| "Irpan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "IRFAN"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
