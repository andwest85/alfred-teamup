//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Greetings, Here is how I can help you; type the name of the skill for more information: ";
        text += "\n- " + bot.appendMention(message, "Keyword") + ": I will respond to keywords with information and resources to help you learn about and adopt Webex Teams and it's newest features. (i.e. notification, create space; here is a complete " + "list".link('https://cisco.box.com/shared/static/7puqq5bsleeiaclgdyuyjg93fmlflzdw.docx') + ")";
        text += "\n- " + bot.appendMention(message, "Search Cisco") + ": If I do not have an answer to your query, we can check the atyourservice domain and other Cisco Databases for support.";
        text += "\n- " + bot.appendMention(message, "Escalate") + ": If I still cannot provide an answer, I can get you to a support space to resolve your issue.";
        bot.reply(message, text);
    });
}
