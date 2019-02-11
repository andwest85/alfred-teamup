module.exports =  function (controller, bot, event) {

  controller.hears(["botkit"], 'direct_message,direct_mention', function (bot, message) {
        var text = "TEST WORKING"
        bot.reply(message, text);
    })


}
