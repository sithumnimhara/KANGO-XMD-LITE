//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xLNGYxbjZMSWs0dE1RVVlrTkVsMS9IWVNiWVIxaDhScHl5Z2kzMkltbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHJvQWtadEp0QUt1anJJQThJWHRsSnk4dEU5anNFRkR3Ti82RDBIYjFqUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTnFSOUNMT3FDRlpONXBMYjBNMkFXVDlONnBZWnF6VjFqdnlnTVg4UDJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0cm5xL3FLL1RILzNCdHFPZHY0cmZ1bGcvMXA0WFNTY0RJOCt1czdoM1FzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFSDl4TzNlWFZEaE9qQnYvbitER2FYcDllSTAvQ0hDTSs5TisxeWxOVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRMS2VQMlVnTm1YWkdEUjdRMSs4N3RZSGQ2T2ZpMHE0OFFuWE9qMjhXRlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dQN1RCR2xGTWY2SmdHMWFiQ0REWjR4dm54bFpzT25qby9tVDNhV1hrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOW83a2xnS05IOU9OYWs0TWxoUEVxd3ZDYVhaaHFEZEZMd05zZEdzVEVrdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRrMGxSR3Y1Z1IvRGtaMHJnVng2U0d1K2J5VnZVSmJNOHROWFJOcWdlejQ1UVJaZSs4Y2RLTE04Q1dKVVVSeS9IVkorcWJqLzg5OUtkSDRyRTJKZGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJBZDY3QW44VTNaeG45ZUZJRGdqbkhEL0Q5MmVTa1hsd3BXbXM2Vjl4aGc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMTgwOTM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzc2RTVDNjEzRTMxOUI1ODNBNUY4MkRDOEE4NUQxOSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1NTUwODgzfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjFKM0dZVkpWIiwibWUiOnsiaWQiOiI5NDc2MjE4MDkzOToxN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzMDExMjI3NjE1NjQ1NToxN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09DUmdPTUJFSkRXOE1rR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhLVGMrZ2tuU09qajdXQXJERmthZFRIbkxFOUFUdEh1SXpJVHd3V1ljMms9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdFT20yY2xXYi9MZWcrWmgvbUJDOUd0b3FYdVBlclFFS3N6eUVTc0RVcEhEVFVlaEJsL0phYlBOT0ZNYjc5bXNGWGRvWVphalBQQXJPK0k4eVRkNkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5eC9kdTZLVWFhQ3h0RUVwUEwyZm1CVUNEUEp3VkJFM3FyZk9VVG9kUjFsZ3ViR3k0Y1V1RStLRUFMbElpZVFVS1FTS1VwK1h1ZXk4YTdadklwZjZnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEzMDExMjI3NjE1NjQ1NToxN0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnlrM1BvSkowam80KzFnS3d4WkduVXg1eXhQUUU3UjdpTXlFOE1GbUhOcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY1NTUwODc5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZQLyJ9' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
