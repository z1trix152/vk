const { Keyboard, VK, getRandomId } = require("vk-io");
const { HearManager } = require("@vk-io/hear");

const vk = new VK({ token: 'vk1.a.vsv0azmLeG0nAlRGGGtPl4aXfU_3jFRziimIetgGRPBaiVj8Vug1wWmifCEnKU1SjwzGTwn1NwUdkjwE6zEcbrH2yA-K2ug385b4Ry-UVa_-2lA9Yz1yXWWNF81gWbdmwAJ7WI0SL7zchjfIGVt76CsEReMP-vOjK_WbtL4fodYl42zsGy7GllXF_u-z-SlOIpJ5d9_99Qac_vEHR8bBjg' });

const bot = new HearManager();

vk.updates.on("message_new", bot.middleware);

bot.hear(/Начать/i, msg => {
    let keyboard = Keyboard
    .keyboard([[
        Keyboard.textButton({
            label: 'Попробовать'
//            color: 'negative'
        })
    ]])
    msg.send({ message: "Кнопки ниже!", keyboard: keyboard, random_id: getRandomId()} )
});

console.log("bot start!");

vk.updates.start().catch(console.error);
