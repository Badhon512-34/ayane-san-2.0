const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "hmemev",
    aliases: ["18meme"],
    version: "1.0",
    author: "BADHON",
    countDown: 10, // 10 second cooldown
    role: 0,
    shortDescription: {
      en: "entertaining 18+ and funny names for boys and girls"
    },
    longDescription: {
      en: "entertaining 18+ and funny names for boys and girls just for entertainment nothing else"
    },
    category: "18+",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event, message }) {
    try {
      // List of video URLs
      const videoUrls = [
        "https://files.catbox.moe/12n9w3.mp4",
        "https://files.catbox.moe/3q1g3u.mp4",
        // Add more video URLs here as needed
      ];
      
      // Randomly select a video
      const randomIndex = Math.floor(Math.random() * videoUrls.length);
      const selectedVideoUrl = videoUrls[randomIndex];
      
      // Send the video with message and reaction
      const msg = await message.reply({
        body: "Here is your 18+ meme 🥵🐣",
        attachment: await global.utils.getStreamFromURL(selectedVideoUrl)
      });
      
      // Add reaction when successfully sent
      api.setMessageReaction("🐥", event.messageID, (err) => {
        if (err) console.error("Failed to set reaction:", err);
      }, true);
      
    } catch (error) {
      console.error("Error in hmemev command:", error);
      message.reply("An error occurred while processing your request.");
    }
  }
};
