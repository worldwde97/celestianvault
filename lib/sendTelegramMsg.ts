import axios from "axios";

const botToken = process.env.TELEGRAM_BOT_TOKEN;

async function sendTelegramMsg(chatId: string | number, text: string, parseMode?: "HTML" | "Markdown") {
  if (!botToken) {
    console.error("TELEGRAM_BOT_TOKEN is not set");
    return false;
  }
  if (!chatId) {
    console.error("chatId is not set");
    return false;
  }
  if (!text) {
    console.error("text is not set");
    return false;
  }

  try {
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: text,
      parse_mode: parseMode,
    });

    return response.data.ok;
  } catch (error) {
    console.error("sendTelegramMsg error:", error);
    return false;
  }
}

export default sendTelegramMsg;
