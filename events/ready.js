const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "Nether version 1.1",
        "#StayAtHome",
        "#EvdeKal"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
 client.user.setActivity(oyun[random], "#StayAtHome" );
        }, 1 * 1500);
};
