const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "This is Daniels MD ..fuck you " ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jayjayden1011@gmail.com"
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


global.devs = "2347042599957" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347042599957";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_15_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNW1lUFM4Q1NGcGdJd205THlFd2hadFdaZEl3aXJwSDR3TkZFWU9Ta3pqcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQyNTk5OTU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUNDREE5M0EyNkQ0NDAxMkJFOTlFRjhBQkUwNjY5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU2NTM3MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR0VIUjBXWHZUTUtpRm1LMEt3TjFVd1wiLFxuICBcInBob25lSWRcIjogXCJmOGQ4YTY3YS00ZjZkLTQzOGUtYmE2NS0wZTdmZTI1ZDZiM2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgODMsXG4gICAgICAzLFxuICAgICAgNTIsXG4gICAgICAxODMsXG4gICAgICA0NCxcbiAgICAgIDksXG4gICAgICAxNDcsXG4gICAgICA5OSxcbiAgICAgIDE2MCxcbiAgICAgIDE1MixcbiAgICAgIDI1LFxuICAgICAgMjE3LFxuICAgICAgMjE4LFxuICAgICAgMTYxLFxuICAgICAgOTUsXG4gICAgICAxNyxcbiAgICAgIDEyOCxcbiAgICAgIDIyLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMjE1LFxuICAgICAgMjI0LFxuICAgICAgMzAsXG4gICAgICAxNzUsXG4gICAgICAyMTMsXG4gICAgICAyOCxcbiAgICAgIDE5MSxcbiAgICAgIDY4LFxuICAgICAgNzcsXG4gICAgICAyMCxcbiAgICAgIDE0OSxcbiAgICAgIDc1LFxuICAgICAgMTIyLFxuICAgICAgMjA2LFxuICAgICAgMTc2LFxuICAgICAgMTE1LFxuICAgICAgMzUsXG4gICAgICAyNDAsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkZXUDlEWUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDI1OTk5NTc6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEYW5cIixcbiAgICBcImxpZFwiOiBcIjQ1MDUwNDQ4ODQyOTIyOjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tIdHJ1Y0RFTS9GN2JZR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicDE3M3QwYUZDcWJEQ2FUWjIwZThKVGhZV21jOVJDZlFtMXZ6VWNScDh5VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsOXFsWW81aXl2MmR3TDd1VXdWZHR0SnJodTAvVHRvNlcrNmJRTXpLN281N1NNT2YxUTJVbjVtcExESXlrMUFNcW1uVlhLcnlReGhsTHZuMlBhSVREQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMazhXcG5peGQxOGkwOXNhd2djdC9kN2dzL2FwemFIYllYOFlkbUpOSC9GYlNtS1BIMXdDNDIyZFRYQk1nWXhmNmxxZTY3TnVIMUtoZ0xWTzQ5K3VDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQyNTk5OTU3OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU2NTM3MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUkFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhSQS5qc29uIjogIntcImtleURhdGFcIjpcIlZ4eWFPVGVIdGxUTVN3OGZlRFhOczAxYVVzaWZzbno2MEFUems1Nnh4WEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyMjA4MDY3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDg1MTg1MzcwMVwifSIKfQ=="  // PUT your SESSION_ID 


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
