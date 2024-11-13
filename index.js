const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();

const bot = new Telegraf('7932390738:AAGtT-YNKLyZzhPlWilOSz72shw_T7ihZtc');

app.use(express.json());

app.post('/sendMessage', (req, res) => {
    const { chat_id, text } = req.body;

    bot.telegram.sendMessage(chat_id, text)
        .then(() => {
            res.status(200).send('Message sent');
        })
        .catch(err => {
            console.error('Error sending message:', err);
            res.status(500).send('Error sending message');
        });
});

bot.start((ctx) => {
    ctx.reply('Здравствуйте! Я уведомляю о новых возвратах, закрепленных за вами.');
});

bot.on('text', (ctx) => {
    ctx.reply('Сообщение получено!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
