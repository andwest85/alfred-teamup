//
// Fallback Command
//
module.exports = function (controller) {

    controller.hears([".*"], 'direct_message,direct_mention', function (bot, message) {
        var text = "I apologize; I am not familiar with that phrase. Enter the term '<strong>Keywords</strong>' to see my full vocabulary.\
        \n\nIf your query is not covered, we can search the Cisco domain for more information. Type, 'Search Cisco' or 'Search More'.\
        \n\nIf we are still unable to find an answer, enter 'escalate', and I will find live support.";
        bot.reply(message, text);
    });

}
