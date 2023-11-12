import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("coco")
  .setDescription("Responde con un 🥥!");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("🥥");
}
