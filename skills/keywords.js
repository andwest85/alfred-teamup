module.exports =  function (controller, bot) {

  controller.hears(["announcement"], 'direct_message,direct_mention', function (bot, message) {
      var text = "Some company departments like Human Resources and Corporate Communications need to ensure that everyone is informed about the latest news. If you only use traditional methods like email, many people don’t get around to reading updates and there’s very little feedback. How about taking the formality down a notch? Create an announcement space in Webex Teams, so you can post bite-size updates and links to the latest information.";
      bot.reply(message, text);
  })

  .hears(["domain"], 'direct_message,direct_mention', function (bot, message) {
      var text = "You can add and verify your domains in " + "Webex Control Hub".link('https://admin.webex.com/login') + " to ensure the security and integrity of your organization and help with user management.";
      bot.reply(message, text);
  });

  .hears(["architect", "architecture"], 'direct_message,direct_mention', function (bot, message) {
      var text = "You’re comfortable your house was built properly, so why should you feel any different about your digital project? As your bot, I know it’s very  important to me! The very nature of digital architecture requires collaboration between a multitude of different teams and groups. Make sure your inter-structure is stable and reliable by using Webex Teams  to connect your teammates and centralize information. Design your architecture right, from foundation to roof." +
      "Read about the architect persona and how Webex Teams facilitates  a strong architecture in this" "wiki".link'(https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W6cc89e552f29_44a8_8d4b_a49af512163b/page/Architect%20(WxT%20Personas)');
      bot.reply(message, text);
  });

}

You’re comfortable your house was built properly, so why should you feel any different about your digital project? As your bot, I know it’s very  important to me! The very nature of digital architecture requires collaboration between a multitude of different teams and groups. Make sure your inter-structure is stable and reliable by using Webex Teams  to connect your teammates and centralize information. Design your architecture right, from foundation to roof.

Read about the architect persona and how Webex Teams facilitates  a strong architecture in this wiki:
 https://apps.na.collabserv.com/wikis/home?lang=en-us#!/wiki/W6cc89e552f29_44a8_8d4b_a49af512163b/page/Architect%20(WxT%20Personas)
