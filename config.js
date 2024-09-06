const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "This is Daniels MD ..fuck you " ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="judegreene42@gmail.com"
global.location="Delta, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DÃÑÎ€L$²²¹-ᴍᴅ" 


global.devs = "2348154528940" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348154528940";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "fale"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_32_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNWNwbzZCRDJRZ2VQelJwMHRmOWN0ckovQ1dhb0Nvc0d3QWFLblhhSXFQaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRWdhTDRmWXFUcXVpRW45aHdWOWxBQVwiLFxuICBcInBob25lSWRcIjogXCJiYmQ2MWM4OC1hMDA4LTQzOTYtYjI2Yy1jZTZlNmI4ZTk0Y2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMTcyLFxuICAgICAgNzgsXG4gICAgICA5NCxcbiAgICAgIDIxMCxcbiAgICAgIDE5NCxcbiAgICAgIDI3LFxuICAgICAgMjU1LFxuICAgICAgMTUzLFxuICAgICAgNDksXG4gICAgICAyNTIsXG4gICAgICAyNTUsXG4gICAgICAxOTksXG4gICAgICAxOTYsXG4gICAgICA2NCxcbiAgICAgIDE0LFxuICAgICAgMTMwLFxuICAgICAgMjQxLFxuICAgICAgMzQsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgNzcsXG4gICAgICAxNDYsXG4gICAgICA4OSxcbiAgICAgIDYsXG4gICAgICAyMDMsXG4gICAgICAxNDgsXG4gICAgICAyMTQsXG4gICAgICAyMjQsXG4gICAgICA5MyxcbiAgICAgIDE3MCxcbiAgICAgIDIzMixcbiAgICAgIDgxLFxuICAgICAgMjIsXG4gICAgICAxMjQsXG4gICAgICAyMixcbiAgICAgIDIzLFxuICAgICAgMTc4LFxuICAgICAgMjUzLFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA3UzVYNEVCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU0NTI4OTQwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDEzMDQ4NjAyNDYyMTQ6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEQ3MHVFREVOWHA3YllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNekNrOHpmYzBPOWdOOTB6QkMvb3dxaDZGd0N3UGhhWUlqSnpBZERSb0M4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZjVHpWd3lqdk1yekprQ2U0dVhQUDdNZDIyZ2M1UDFsSUhMSmRMYTl2Sjdrek9US0IzcDRqb1lReXBOLzJpTjdmbmZTVUpENFQxMTVISFJEWkJ6b0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNSQ3ZDbjlYY1dodmpOL3MrR0VDRklNVlRPUXpHQXhtaFUyZ2IxdHVTWmlSMkpnemdLcjJJWUNjVm11VEM4Wm5ZeWtPdHlyQkh5S3dXSHZRTEtUZGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTQ1Mjg5NDA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTY1ODMzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI4bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjhtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWp4MzVrWStUNHdkWnZLNVNVWHpBUTlRWlA2cXJFUm1xV2UxdFBaazdDaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDEwMDg5MzkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI1NjU4MTU4ODYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DÃÑÎ€L$²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DÃÑÎ€L$",
  packname: process.env.PACK_NAME || "DÃÑÎ€L$",
  botname : process.env.BOT_NAME  || "DÃÑÎ€L$__MD",
  ownername:process.env.OWNER_NAME|| "DÃÑÎ€L$",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "DÃÑÎ€L$__MD"  ).toUpperCase(),



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
