import axios from "axios";

async function sendMsgBot(text) {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage`, {
      params: {
        chat_id: process.env.CHAT_ID,
        text: "Emvios: " + text,
      },
    });

    return JSON.stringify(response.data);
  } catch (error) {
    console.log(error);
  }
}

export default sendMsgBot;
