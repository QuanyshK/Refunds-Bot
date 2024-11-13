from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

TOKEN = "7932390738:AAGtT-YNKLyZzhPlWilOSz72shw_T7ihZtc"
subscribed_users = set()

def start(update: Update, context: CallbackContext) -> None:
    user_id = update.effective_user.id
    if user_id not in subscribed_users:
        subscribed_users.add(user_id)
        update.message.reply_text(
            "Вы успешно подписались на уведомления о новых возвратах. Теперь вы будете получать сообщения при обновлениях!"
        )
    else:
        update.message.reply_text("Вы уже подписаны на уведомления.")

def send_notification(context: CallbackContext, message: str):
    for user_id in subscribed_users:
        context.bot.send_message(chat_id=user_id, text=message)

def main():
    updater = Updater(TOKEN)
    updater.dispatcher.add_handler(CommandHandler("start", start))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
