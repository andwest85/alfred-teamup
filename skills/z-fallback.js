//
// Fallback Command
//
module.exports = function (controller) {

    controller.hears([".*"], 'direct_message,direct_mention', function (bot, message) {
        var mardown = "I apologize, I am not familiar with that phrase. Please refer to this list of search terms - https://cisco.box.com/shared/static/7puqq5bsleeiaclgdyuyjg93fmlflzdw.docx. If your topic is not present, type 'Cisco' and we can search the at your service portal and other Cisco databases. Finally, type 'escalate' and we will find some in-person support."
        bot.reply(message, mardown);
    });
}
