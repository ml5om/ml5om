const Discord = require('discord.js');
const Rocket = new Discord.Client();
const jimp = require("jimp");// npm i jimp
const package = ('package.json');
const yt = require('ytdl-core');
const prefix = ("+")
const child_process = require("child_process");
const ownerid = ('280749272498962432')
const canvas = require("canvas-prebuilt")
const fs = require('fs')
const moment = require("moment");



client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


     function commandIs(str, msg){
            return msg.content.toLowerCase().startsWith('+' + str);
        }

        function pluck(array) {
            return array.map(function(item) { return item['name']; });
        }

        function hasRole(mem, role) {
            if(pluck(mem.roles).includes(role)){
                return true;
            } else {
                return false;
            }

          }





        var servers = {};






        var q1 = "+quran 1"

        var q2 = "+quran 2"

        var q3 = "+quran 3"

        var q4 = "+quran 4"





        function play(connection, message) {
            var server = servers[message.guild.id];

            server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

            server.queue.shift();

            server.dispatcher.on("end", function() {
                if (server.queue[0]) play(connection, message);
                else connection.disconnect();
            });
        }



        //sowar


        client.on("message", message => {

                                if (message.content === q1 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                  if (message.content === q2 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                    if (message.content === q3 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                      if (message.content === q4 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
                });
          }



            //outher_cummon


          if(message.content === "+qstop" ) {
                          var servers = {};

                    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

          }



        });


   
client.login(process.env.BOT_TOKEN);
