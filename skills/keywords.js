module.exports =  function (controller, bot) {


  controller.hears(["domain"], 'direct_message,direct_mention', function (bot, message) {

      var text = "You can add and verify your domains in the " + "Webex Control Hub".link('https://admin.webex.com/login') "to ensure the security and integrity of your organization and help with user management.";
      bot.reply(message, text);

  });

}
