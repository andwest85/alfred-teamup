//
// Example of a conversation with a menu that loops until explicitly stopped
//
module.exports = function (controller) {

    controller.hears(["Search Cisco", "Search More", "Keep Searching"], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            var question = "Please enter a keyword and we will search more Cisco Domains, including at-your-service. Type 'stop' or 'cancel' to end this conversation.";

            convo.ask(question, [
                {
                    pattern: "stop| cancel| end conversation| end",
                    callback: function (response, convo) {
                        convo.gotoThread('menu_1');
                    },
                }
                , {
                    default: true,
                    callback: function (response, convo) {
                        convo.say('hitting default!');
                        convo.gotoThread('menu_2');
                    },
                }
            ]);

            // Menu option 1)
            convo.addMessage({
                text: "Ending Conversation",
                action: 'stop'
            }, 'menu_1');

            // Menu option 2)
            convo.addMessage({
                callback: function(response, convo) {
                  convo.say('Thank you! Searching Cisco databases for ')
                }
            }, 'menu_2');


        });
    });
};
