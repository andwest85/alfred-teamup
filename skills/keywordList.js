
var http = require("https");
module.exports = function(controller, bot) {

  controller.hears(["keywords", "keyword", "key word", "key words"], 'direct_message,direct_mention', function (bot, message) {
      var text = "My complete vocabulary is listed below; enter a term and I will provide information on this topic.\n\n <strong>Keywords</strong>:";
      var keywordsArr = ["activity panel","@mention","analyst","announcement","assisted setup","avatar","basics","Bots","call","camera tips","change management","Cisco Directory Connector","conferencing","collaboration portal","communications","creative team","create team","chief technology officer","demo","developer support","desktop settings","director","directory synchronization","directed setup","director and vp","distributed team","domain","download Webex Teams","engineer","executive assistant","feedback","filters","finance","flags","global notifications","hybrid call","integrations","join from mobile","local notifications","messages","marketing","meetings","members","mobile settings","moderator","move space","navigate","notification","party","people manager","persona","Power Pack","project manager","recordings","sales","schedule meeting","search","send message","sign in","support","\\#teamup","technology","toolkit","video call","video device","Webex Adoption space","Webex Board"];
      for (var i = 0; i < keywordsArr.length; i++) {
        text += "     " + keywordsArr[i].charAt(0).toUpperCase() + keywordsArr[i].replace(keywordsArr[i].charAt(0), '');
      }
      bot.reply(message, text);
  })

}
