const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();

client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

        client.on("message", message => {

                                if (message.content === +q1 ) {
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
