const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_53_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhZ0RXMTBzdi9ORzVuNGIvQStBWnhGR1o3S2tpNENiMVlNalN3c1JtZHpRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3QzFENDQ3QzY5M0M0OTlCQTkyQzU0OUVEQUQ2QzkwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTI1OTIxOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhGODY2OUE2RDBGMkRERjQ0M0VDOEEwQTA5RDJGNTY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTI1OTIxOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdCNjRBM0VEN0E1NzNFNTFEM0FGMkExQzExNkE0ODZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTI1OTIyMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDQjU3MEJCNkJGNDRGMjk3RUFEMzk1OEM4MDc2RUIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTI1OTIyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXYndyMzc3clRUcXVQN0VUSVZhVU93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlMDVlMTNhLTNlNGItNDEwMi04Njk0LTBmMjRiOThjYzlhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAxMTMsXG4gICAgICA2MixcbiAgICAgIDIwMixcbiAgICAgIDE3MyxcbiAgICAgIDc3LFxuICAgICAgMTc5LFxuICAgICAgMzcsXG4gICAgICAxOSxcbiAgICAgIDIsXG4gICAgICAyNCxcbiAgICAgIDE3MixcbiAgICAgIDExNSxcbiAgICAgIDExNyxcbiAgICAgIDQ1LFxuICAgICAgMTAyLFxuICAgICAgNTQsXG4gICAgICAxNDAsXG4gICAgICAyMjgsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgOTcsXG4gICAgICA2NyxcbiAgICAgIDMsXG4gICAgICAxMjcsXG4gICAgICAxNTQsXG4gICAgICAxMTksXG4gICAgICAyNTAsXG4gICAgICAyMTAsXG4gICAgICAyMzksXG4gICAgICAzMixcbiAgICAgIDQ5LFxuICAgICAgODUsXG4gICAgICAxNjAsXG4gICAgICA0NyxcbiAgICAgIDE3MixcbiAgICAgIDMwLFxuICAgICAgMjM2LFxuICAgICAgMTU4LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVaUVhXUkxLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI1OTAyNzAwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjUzODY3NDE4ODMwOTY6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic3VjY2Vzc2Z1bGtvbnRyb2xsZXJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT1o2cDBCRU0yTzg3RUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVwTU1FYWNzVGh1NE40TVBzd1k1VXlOc3JkaUNUbVliamhyKzhZTlNzUm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiais0enZBNU5lTTd6UVBwLzdmTnBWRXd3elNXSFN4V0lsdnMydkhPVVZra1N2TXJObDNGc2tINlZRcVpoR2hYcGJBVUlQaUdCTmJJNk9RaGp6K2xWQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNSsrbU83SVRNN0VaVDRtUSsxeGJReG12NjlXREZYTVY2YXJCUERmbFIxYkxyb1ROZXNYUlpmNHE1Vk41MHQ0NW9RNTFXRnlZWXkzMTRJV2VTekpkaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyNTkwMjcwMDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTI1OTIxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1FLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTVVYNkNycnJZbVhsdUxGYlh1UHJlY1Npa1VlRkw5cmdEQ0ZjMm42VTlRdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzA5OTI4NjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTI1OTIxNzY2NlwifSIKfQ==
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || ".", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
