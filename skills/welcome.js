//
// Welcome message sent as the bot is added to a space
//
module.exports = function (controller) {

    controller.on('bot_space_join', function (bot, event) {

        var welcome = "Hi <@personId:${event.actorId}>, delighted to make your acquaintence! As part of the adoption campaign for Webex Teams, I am here to support you. I provide information on key topics like "
        + "notifications and creating spaces. If I do not have pertinent Webex-related information, I will search the At Your Service portal.";

        if (this.identity) {
            welcome += `<br/>I am the **${this.identity.displayName}** bot`;
        }

        bot.say ({
            text: welcome,
            channel: event.channel
        }, function (err, rawMessage) {
            if (err) {
                console.log("Error while posting back welcome message, err: " + err.message)
                return;
            }

            var help = "As part of the adoption campaign for Webex Teams, I am here to support you. I provide information on key topics like "
            + "notifications and creating spaces. If I do not have pertinent Webex-related information on the topic you entered, I will search the At Your Service portal.";

            if (rawMessage.roomType == "group") {
                help = "Note that this is a 'Group' space. I will answer only if mentionned.<br/>";
                help += "To learn about my skills, type " + bot.appendMention(rawMessage, "help");
            }

            bot.say({
                text: `_${help}_`,
                channel: rawMessage.roomId
            }, function (err, messageAck) {
                if (err) {
                    console.log("Error while postig back help message, err: " + err.message)
                    return;
                }
            });
        });
    });
}
