import dotenv from "dotenv";

dotenv.config();

const { DISCORD_BOT_TOKEN, DISCORD_APPLICATION_ID } = process.env;

if (!DISCORD_BOT_TOKEN || !DISCORD_APPLICATION_ID) {
  throw new Error("Missing environment variables");
}

export const config = {
  DISCORD_BOT_TOKEN,
  DISCORD_APPLICATION_ID,
};
