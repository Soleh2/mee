const fs = require('fs')


exports.ok = () => {
    return `Ok desu~`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}menu*`
}

exports.hadis = (command) => {
    return `*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${command} bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${command} muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${command} tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${command} nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${command} ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${command} abu-daud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${command} malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${command} ibnu-majah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${command} darimi 3`
}

exports.groupBot = (sender) => {
    return `
Link Group Chika Fenst : https://chat.whatsapp.com/HLU6B1Mw34QBMUoXAyhec0
Link Group Chika Fenst V2 : https://chat.whatsapp.com/IwGkynIvQAk1J6wQVDLeFC


Jangan lupa join ya kak @${sender.split('@')[0]}`
}

exports.BlockBan = (ownerNumber, prefix) => {
    return `*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${ownerNumber}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.vnDel = () => {
    return `Vn berhasil dihapus dari database!`
}

exports.vnAdd = () => {
    return `Vn berhasil ditambahkan ke database!`
}

exports.vnAddAlready = (q) => {
    return `Vn dengan keyword "${q}" sudah ada di database!`
}

exports.vnNotFound = () => {
    return `Vn tidak ditemukan!`
}

exports.imageAdd = () => {
    return `image berhasil ditambahkan ke database!`
}

exports.imageAddAlready = (q) => {
    return `image dengan keyword "${q}" sudah ada di database!`
}

exports.imageNotFound = () => {
    return `image tidak ditemukan!`
}

exports.respon = (ketikan, respt) => {
    return `
*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${ketikan}
➸ *Akan Merespon*: ${respt}`
}

exports.responAlready = (ketikan) => {
    return `
Maaf, autorespon untuk teks "${ketikan}" sudah ada sebelumnya,harap memasukkan teks lain.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}

exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.menu = (prefix, ucap, pushname2, jumlahUser, timebot, owner, jumlahHarian, jumlahCommand, sender, time, public, levelMenu, xpMenu, reqXp, uangku, role, Limitnya) => {
    return `\`\`\`Selamat ${ucap} Kak @${sender.split('@')[0]} 😳\`\`\`

╭───「 *Info Bot* 」─────❉  
│
│☉ *Bot name*: AlyaCans
│☉ *Owner name: Nando
│☉ *Waktu: ${time}*
│☉ *Status bot* : ${public} 
│
├──────────────────❉  
│
│☉ *Name* : ${pushname2}
│☉ *API kamu* : https://wa.me/${sender.split('@')[0]}
│☉ *Limit* : ${Limitnya}
│
├──────────────────❉  
│
│*Your Progress*:
│*Level:* ${levelMenu}
│*XP:* ${xpMenu} / ${reqXp}
│*Role:* ${role}
│*Your Balance:* $${uangku}
│
├──────────────────❉ 
│
│⌦ *Runtime:*
│${timebot}
│⌦ *Auto-Regis User:*
│${jumlahUser}
│⌦ *Total Hit Bot:*
│${jumlahCommand}
│⌦ *Total Hit Today:*
│${jumlahHarian}
│
╰────「 *Alya Bot* 」────❉

*Official BOT By @0*`
}

exports.menuDownloader = (prefix) => {
    return `
*── 「 DOWNLOADER 」 ──*
#playmp4
#joox
#mediafire
#drive
#zippyshare
#soundcloud
#play
#playmp3
#igstory
#hinttt
#sendfile
#cocofun
#smule
#igdl
#fbdl
#ytsearch
#igstalk
#ghstalk
    `
}

exports.menuText = (prefix) => {
    return `
*── 「 TEXT MAKER 」 ──*
#retro
#blackpink
#neon
#glitch
#harta
    `
}

exports.menuPremi = (prefix) => {
    return `
*── 「 PREMIUM 」 ──*
Halo premium users ヽ(・∀・)ﾉ!
#ytdl
#ytmp4
#ytmp3
#ytmpp4
#ytmpp3
#stickerwm
#asupan
#pinterest
#spamcall
#spamsms
#nekosearch
#brainlysearch
#brainly
#addrespon
#delrespon
#listrespon
#delsticker
#addsticker
#premiumcheck
#sewacheck
#listprem
#sewalist
`
}

exports.menuSticker = (prefix) => {
    return `
*── 「 STICKER 」 ──*
#exif
#waifustick
#patrick
#esticker
#gura
#doge
#bucinstick
#ttp2
#tomp3
#sfire
#pet
#sticker
#stickerp
#toimg
#tovid
#attp
#ttp
#ttg
#findsticker
#linedl
#teledl
#translate 
#stickermeme
#tts
#shortlink
#shortlink2
#shortlink3
#kurs
    `
}

exports.menuWeeaboo = (prefix) => {
    return `
*── 「 WEEABOO 」 ──*
#slap
#pat
#baka
#hug
#cium
#waifu
#kemono
#elf
#konachan
#fanart
#quotesanime
#neko
#wallnime
#genshininfo
#manga
#anime
#whatanime
    `
}

exports.menuFun = (prefix) => {
    return `
*── 「 FUN FEATURE 」 ──*
#pantun
#sange
#ganteng
#cantik
#jadian
#seberapagay
#rate
#hobby
#truth
#dare
#cekbapak
#suit
#slot
#dadu


    `
}

exports.menuImage = (prefix) => {
    return `
*── 「 EFFECT AND MANIPULATION 」 ──*

    `
}

exports.menuKerang = (prefix) => {
    return `
*── 「 KERANG 」 ──*

1. *${prefix}kapankah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}kapankah* text

2. *${prefix}bisakah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}bisakah* text

3. *${prefix}rate*
Mengambil jawaban random dari bot
Aliases: nilai
Usage: *${prefix}rate* pertanyaan


    `
}

exports.menuModeration = (prefix) => {
    return `
*── 「 MODERATION GROUP 」 ──*
#cekprefix
#getpp
#tagme
#kontak
#hidetag
#antidelete
#level
#leaderboard
#buylimit
#claim
#delete
#afk
#infogrup 
#kick
#linkgc
#leave
#setdesc
#setgrupname
#group
#setppgroup
#tagall
#antibadword
#mute
#antilink
#antiviewonce
#welcome
#autosticker
   `
}


exports.menuNsfw = (prefix) => {
    return `
*── 「 NSFW 」 ──*
#lewds
#fetish
#nhentai
#nekopoi
#xnxxsearch
#xhamstersearch
#waifu18
#ceritasex
#lewdavatar
#femdom
#chiisaihentai
#hololewd
    `
}

exports.menuOwner = (prefix) => {
    return `
*── 「 OWNER MENU 」 ──*
Halo Owner-sama ヽ(・∀・)ﾉ!
#owner
#premium add
#self
#publik
#clearall
#shutdown
#setprefix
#nopref
#gif
#setstat
#bc
   `
}

exports.menuLeveling = (prefix) => {
    return `
*── 「 infomenu 」 ──*
#limit
#donasi
#speed
#owner
#rules
#sewabot
    `
}

exports.menuPrimbon = (prefix) => {
    return `
*── 「 PRIMBON MENU 」 ──*
#artinama
#artimimpi
#jodoh
#ramaljadian
    `
}

exports.menuPray = (prefix) => {
    return `
*── 「 PRAY 」 ──*
#listsurah
#renungharian
#alkitabharian
#asmaulhusna
#alquranaudio
#alquran
#alkitab
#randomquran
#jadwalsholat
#nabi
#hadis
    `
}

exports.menuMisc = (prefix) => {
    return `
*── 「 MEDIA AND MISC 」 ──*
#nulis
#nuliskiri
#nuliskanan
#foliokiri
#foliokanan
#foliokiri
#google
#tourl
#fakta
#bucin
#quotes
#cuaca
#jadwalbola
#berita
#corona
#jadwaltv
#lk21
#math
#jarak
#hoax
#next 
#resepmasakan
#joke
#meme
#wallpapersearch
#subreddit
#memeindo
#darkjoke
#wikipedia
#wikien
#readqr
    `
}

exports.menuBot = (prefix) => {
    return `
*── 「 BOT STAT 」 ──*
    `
}

exports.menuPrice = (owner, pushname) => {
    return `
*── 「 PRICE LIST 」 ──*
 
*Hai kak  ${pushname}*
*Harga Sewa Bot*
*15K/Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${owner}*
*QRis yang dilampirkan*
*PAYPAL = rashidsiregar28@gmail.com*

*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
*wa.me/${owner} (Owner)*

    `
}

exports.UpToPremi = (ownerNumber, prefix) => {
    return `
*── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${ownerNumber}*
*Qris pada gambar diatas*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
089501060783 (OVO/Telkomsel/GoPay)


Terima kasih!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

Untuk melihat script yang bot gunakan,ketik ${prefix}sc
    `
}
