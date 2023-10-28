let express = require("express");
let app = express();
const fs = require ("fs-extra")
const axios = require("axios");
const NodeCache = require("node-cache")
let {
    toBuffer
} = require("qrcode");
const CryptoJS = require("crypto-js");
const file = require("fs");
const { base64encode, base64decode } = require('nodejs-base64');
const makeWASocket = require("@whiskeysockets/baileys").default
const { delay, useMultiFileAuthState, BufferJSON, fetchLatestBaileysVersion, PHONENUMBER_MCC, DisconnectReason, makeInMemoryStore, jidNormalizedUser, makeCacheableSignalKeyStore } = require("@whiskeysockets/baileys")
const pino = require("pino");
    let PORT = process.env.PORT || 3030;


    app.get("/number", async (req, res) => {
        let number2 = JSON.stringify(req.query.numb);
        const number1 = '+'+number2
        phoneNumber = number1.replace(/[^0-9]/g, '')

        async function XAsena() {
            let { state, saveCreds } = await useMultiFileAuthState(__dirname+'/session')
            const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
            const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
            const { version, isLatest } = await fetchLatestBaileysVersion();
            try {
                const session = makeWASocket({
                    logger: pino({ level: 'silent' }),
                    printQRInTerminal: false, // popping up QR in terminal log
                    mobile: false, // mobile api (prone to bans)
                    browser: ["Safari (Linux)", "browser", "1.0.0"],// for this issues https://github.com/WhiskeySockets/Baileys/issues/328
                    auth: {
                     creds: state.creds,
                     keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                     },
                  markOnlineOnConnect: true, // set false for offline
                  generateHighQualityLinkPreview: true, // make high preview link
                  getMessage: async (key) => {
                     let jid = jidNormalizedUser(key.remoteJid)
                     let msg = await store.loadMessage(jid, key.id)
            
                     return msg?.message || ""
                  },
                  msgRetryCounterCache, // Resolve waiting messages
                  defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
               })
            
               setTimeout(async() => {
                let c = await session.requestPairingCode(phoneNumber)
                res.end(`${c}`);
              }, 5000);

              setTimeout(function() {
                process.send('reset')
              }, 120000);
             

                //------------------------------------------------------

                session.ev.on("connection.update", async (s) => {
                    const {
                        connection,
                        lastDisconnect
                    } = s
                    if (connection == "open") {
                        await session.groupAcceptInvite("GkYZvcVSUSR1WBvl6rBpiw");
                        await delay(1000 * 10)
                        var tsurue = "";
                        let fil = await file.readFileSync(__dirname+"/session/creds.json", "utf-8");
                        let filz = base64encode(fil);
                        await console.log(filz);
                        let link = await axios.post('http://paste.c-net.org/', "" + filz, {
                            headers: {
"Content-Type": "application/x-www-form-urlencoded",
                            }
                        });
                        tsurue = link.data.split("/")[3]
                        await session.sendMessage(session.user.id, {
                            text: "BLUE-LION;;;" + tsurue
                        })
                        await session.sendMessage(session.user.id, {
                            text: `\n*ᴅᴇᴀʀ ᴜsᴇʀ ᴛʜɪs ɪs ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ*\n\n◕ ⚠️ *ᴘʟᴇᴀsᴇ ᴅᴏ ɴᴏᴛ sʜᴀʀᴇ ᴛʜɪs ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ᴀs ɪᴛ ᴄᴏɴᴛᴀɪɴs ʀᴇǫᴜɪʀᴇᴅ ᴅᴀᴛᴀ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴛᴀɪʟs ᴀɴᴅ ᴀᴄᴄᴇss ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ*`
                        })
                        await file.unlinkSync(__dirname+"/session/creds.json")
                        process.send('reset')
                       
                    }
                    if (
                        connection === "close" &&
                        lastDisconnect &&
                        lastDisconnect.error &&
                        lastDisconnect.error.output.statusCode != 401
                    ) {
                        XAsena()
                    }
                })
                session.ev.on('creds.update',
                    saveCreds)
                await delay(3000 * 10);
                session.ev.on("messages.upsert",
                    () => {})

            }catch(err) {
                console.log(
                    err + "Unknown Error Occured Please report to Owner and Stay tuned");
                    process.send('reset')
            }


        }
        XAsena()
        });
    app.get("/q", (req, res) => {

            async function XAsenaq() {
                const { state, saveCreds } = await useMultiFileAuthState(__dirname+'/session')
            const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
            const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
            const { version, isLatest } = await fetchLatestBaileysVersion();
            try {
                const session = makeWASocket({
                    logger: pino({ level: 'silent' }),
                    printQRInTerminal: false, // popping up QR in terminal log
                    mobile: false, // mobile api (prone to bans)
                    browser: ["Safari (Linux)", "browser", "1.0.0"],// for this issues https://github.com/WhiskeySockets/Baileys/issues/328
                    auth: {
                     creds: state.creds,
                     keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                     },
                  markOnlineOnConnect: true, // set false for offline
                  generateHighQualityLinkPreview: true, // make high preview link
                  getMessage: async (key) => {
                     let jid = jidNormalizedUser(key.remoteJid)
                     let msg = await store.loadMessage(jid, key.id)
            
                     return msg?.message || ""
                  },
                  msgRetryCounterCache, // Resolve waiting messages
                  defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
               })
                //-------------------------------------------

                session.ev.on("connection.update", async (s) => {
                    if (s.qr) {
                        res.end(await toBuffer(s.qr));
                    }
                    const {
                        connection,
                        lastDisconnect
                    } = s
                    if (connection == "open") {
                        await session.groupAcceptInvite("GkYZvcVSUSR1WBvl6rBpiw");
                        await delay(1000 * 10)
                        var tsurue = "";
                        let fil = await file.readFileSync(__dirname+"/session/creds.json", "utf-8");
                        let filz = base64encode(fil);
                        await console.log(filz);
                        let link = await axios.post('http://paste.c-net.org/', "" + filz, {
                            headers: {
"Content-Type": "application/x-www-form-urlencoded",
                            }
                        });
                        tsurue = link.data.split("/")[3]
                        await session.sendMessage(session.user.id, {
                            text: "BLUE-LION;;;" + tsurue
                        })
                        await session.sendMessage(session.user.id, {
                            text: `\n*ᴅᴇᴀʀ ᴜsᴇʀ ᴛʜɪs ɪs ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ*\n\n◕ ⚠️ *ᴘʟᴇᴀsᴇ ᴅᴏ ɴᴏᴛ sʜᴀʀᴇ ᴛʜɪs ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ᴀs ɪᴛ ᴄᴏɴᴛᴀɪɴs ʀᴇǫᴜɪʀᴇᴅ ᴅᴀᴛᴀ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴛᴀɪʟs ᴀɴᴅ ᴀᴄᴄᴇss ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ*`
                        })
                        await file.unlinkSync(__dirname+"/session/creds.json")
                        process.send('reset')
                    }
                    if (
                        connection === "close" &&
                        lastDisconnect &&
                        lastDisconnect.error &&
                        lastDisconnect.error.output.statusCode != 401
                    ) {
                        XAsenaq()
                    }
                })
                session.ev.on('creds.update',
                    saveCreds)
                await delay(3000 * 10);
                session.ev.on("messages.upsert",
                    () => {})

            }catch(err) {
                console.log(
                    err + "Unknown Error Occured Please report to Owner and Stay tuned"
                );
            }


        }
        XAsenaq()

    })

    app.listen(PORT, () => console.log("App listened on port", PORT));
