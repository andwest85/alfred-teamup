module.exports =  function (controller, bot) {

  controller.hears(["announcement"], 'direct_message,direct_mention', function (bot, message) {
      var text = "Some company departments like Human Resources and Corporate Communications need to ensure that everyone is informed about the latest news. If you only use traditional methods like email, many people don’t get around to reading updates and there’s very little feedback. How about taking the formality down a notch? Create an announcement space in Webex Teams, so you can post bite-size updates and links to the latest information.";
      bot.reply(message, text);
  });

}
