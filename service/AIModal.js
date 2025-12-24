import axios from "axios";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export const AIChatSession = {
  async sendMessage(prompt) {
    const res = await axios.post(
      `${STRAPI_URL}/api/ai/generate`,
      { prompt }
    );

    // Match OLD Gemini response shape so your code still works
    return {
      response: {
        text: res.data.data,
      },
    };
  },
};
