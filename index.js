const { Telegraf } = require('telegraf');

const bot = new Telegraf('7932390738:AAGtT-YNKLyZzhPlWilOSz72shw_T7ihZtc');

bot.start((ctx) => {
  ctx.reply('Здравствуйте! Я уведомляю о новых возвратах, закрепленных за вами.');
});

bot.on('text', (ctx) => {
  ctx.reply('Сообщение получено!');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
