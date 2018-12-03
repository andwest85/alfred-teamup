//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.appendMention(message, "Keyword") + ": I will respond to keywords with information and resources to help you adopt Webex Teams. (i.e. notification, create space; here is a complete list: https://cisco.box.com/shared/static/7puqq5bsleeiaclgdyuyjg93fmlflzdw.docx)";
        text += "\n- " + bot.appendMention(message, "Search Cisco Domain") + ": If I do not have an answer to your query, we can check the at your service website and other Cisco databases.";
        text += "\n- " + bot.appendMention(message, "Escalate") + ": If I cannot provide an answer, I can get you to a support space to resolve your issue";
        bot.reply(message, text);
    });
}
