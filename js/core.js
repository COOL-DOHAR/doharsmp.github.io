window.onload = function () {

    // GENERAL CONFIGS v0.1

    //Site title
    let title = 'DOHAR CRAFT';

    //Server Ip (counter)
    var serverIp = 'soon';
    var serverIpPort = 00000;

    //Banner image (url) 
    var bannerTop = 'https://i.imgur.com/k0MtSCb.png';

    //--------------- Home Gallery ---------------
    //Firs text / image (url)
    var text_Gfirst = 'Special Items';
    var image_Gfirst = 'https://i.imgur.com/OkfQb7q.png';
    //Second text / image (url)
    var text_Gsecond = 'Economy'
    var image_Gsecond = 'https://i.imgur.com/XU4KHgV.png';
    //Third text / image (url)
    var text_Gtrird = 'Great Community'
    var image_Gtrird = 'https://i.imgur.com/7JP74WT.png';
    //--------------------------------------------

    //Type Server (FullPVP, MiniGame, Survival, and others...)
    var typeServer = '90% Pure Vanilla';

    //--------------- Home Gallery ---------------
    // Image automatically changes according to the name :)
    //Firs player nick / comment text
    var firstPlayerName = 'Dor1toz';
    var firstPlayerComment = "The best server, great fun and the team helps whenever I need it!";
    //Second player nick / comment text
    var secondPlayerName = 'Tester';
    var secondPlayerComment = "Fun, cute and cool. All my friends are playing here and let's make a clan, best server ever";
    //Third player nick / comment text
    var trirdPlayerName = 'Notch';
    var trirdtPlayerComment = "I will defeat them all, wait for me!";
    //--------------------------------------------

    //Social media links / banner (url)
    var urlFacebook = "https://github.com/Tiagox42";
    var urlTwiiter = "https://github.com/Tiagox42";
    var urlInstagram = "https://www.instagram.com/tdantas42/";
    var urlYoutube = "https://www.youtube.com/user/Tg42x/videos";
    var discordInvite = "https://github.com/Tiagox42";
    var bannerSocialImage = "https://i.imgur.com/oSbKvAT.png";


    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------
    //------------------ DO NOT MODIFY THE CONTENT BELOW ------------------

    try {

        document.getElementById('serverIpText').innerHTML = serverIp;
        document.getElementById('title').innerHTML = title;
        document.getElementById('bannerTop').style.backgroundImage = "url(" + bannerTop + ")";
        document.getElementById('image_Gfirst').style.backgroundImage = "url(" + image_Gfirst + ")";
        document.getElementById('text_Gfirst').innerHTML = text_Gfirst;
        document.getElementById('image_Gsecond').style.backgroundImage = "url(" + image_Gsecond + ")";
        document.getElementById('text_Gsecond').innerHTML = text_Gsecond;
        document.getElementById('image_Gtrird').style.backgroundImage = "url(" + image_Gtrird + ")";
        document.getElementById('text_Gtrird').innerHTML = text_Gtrird;
        document.getElementById('typeServer').innerHTML = typeServer;
        document.getElementById('firstPlayerName').innerHTML = firstPlayerName;
        document.getElementById('secondPlayerName').innerHTML = secondPlayerName;
        document.getElementById('trirdPlayerName').innerHTML = trirdPlayerName;
        document.getElementById('firstPlayerImage').src = "https://cravatar.eu/helmavatar/" + firstPlayerName + "/190.png";
        document.getElementById('secondPlayerImage').src = "https://cravatar.eu/helmavatar/" + secondPlayerName + "/190.png";
        document.getElementById('trirdPlayerImage').src = "https://cravatar.eu/helmavatar/" + trirdPlayerName + "/190.png";
        document.getElementById('firstPlayerComment').innerHTML = firstPlayerComment;
        document.getElementById('secondPlayerComment').innerHTML = secondPlayerComment;
        document.getElementById('trirdtPlayerComment').innerHTML = trirdtPlayerComment;
        document.getElementById('urlFacebook').href = urlFacebook;
        document.getElementById('urlTwiiter').href = urlTwiiter;
        document.getElementById('urlInstagram').href = urlInstagram;
        document.getElementById('urlYoutube').href = urlYoutube;
        document.getElementById('discordInvite').href = discordInvite;
        document.getElementById('bannerSocialImage').style.backgroundImage = "url(" + bannerSocialImage + ")";

    } catch (e) {


    }


    MinecraftAPI.getServerStatus(serverIp, {
        port: serverIpPort // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        document.getElementById('serverStatus').innerHTML = status.online ? 'Online' : 'Offline';
        document.getElementById('playersOn').innerHTML = status.players.now;
        document.getElementById('playersMax').innerHTML = status.players.max;
    });

    setTimeout(() => {
        var status = document.getElementById('serverStatus');
        if (status.textContent == 'Online') {
            status.style.color = 'green'
        } else {
            status.style.color = 'red'
        }
    }, 2000);

}

function copyIp() {
    let ip = document.getElementById('serverIpText').innerHTML;
    navigator.clipboard.writeText(ip);
}
