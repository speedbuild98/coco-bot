import { CommandInteraction, Message, SlashCommandBuilder } from "discord.js";
import * as fs from "fs";
import { client } from "..";

export const data = new SlashCommandBuilder()
  .setName("cocotime")
  .setDescription("Iniciar un cocotime");

// Estructura para manejar el estado de la cococadena.
interface CocoChain {
  isActive: boolean; // Indica si una cococadena está en curso.
  count: number; // Contador actual de cocos.
  record: number; // Récord actual de la cococadena.
  channelId: string | null; // ID del canal donde se inició la cococadena.
}

// Inicializar el estado de la cococadena.
const cocoChain: CocoChain = {
  isActive: false,
  count: 0,
  record: getRecord(), // Obtener el récord desde un archivo al iniciar el bot.
  channelId: null,
};

// Obtener el récord desde un archivo. Si no hay archivo o hay un error, el récord es 0.
function getRecord(): number {
  try {
    const data = fs.readFileSync("record.txt", "utf-8");
    return parseInt(data, 10);
  } catch (error) {
    console.error("Error reading record:", error);
    return 0;
  }
}

// Establecer un nuevo récord en el archivo.
function setRecord(count: number): void {
  fs.writeFileSync("record.txt", count.toString(), "utf-8");
}

// Variable global para almacenar el listener de mensajes para poder removerlo más tarde.
let messageListener: ((message: Message) => Promise<void>) | null = null;

// Comprobar si un mensaje contiene solo el emoji coco.
function isCocoMessage(messageContent: string): boolean {
  // Comparar con el Unicode del emoji coco.
  return messageContent === "🥥";
}

// Función para ejecutar cuando se recibe el comando /cocotime.
export async function execute(interaction: CommandInteraction) {
  // Evitar iniciar una nueva cococadena si una ya está activa.
  if (cocoChain.isActive) {
    return interaction.reply("¡Ya hay un cocotime en curso!");
  }

  // Iniciar una nueva cococadena.
  cocoChain.isActive = true;
  cocoChain.count = 0;
  cocoChain.channelId = interaction.channelId;
  interaction.reply("¡Comenzó el cocotime! ¡Hagamos un nuevo record!");

  // Remover el listener anterior si existe para evitar duplicados.
  if (messageListener) {
    client.removeListener("messageCreate", messageListener);
  }

  // Definir el listener para mensajes nuevos.
  messageListener = async (message) => {
    // Ignorar mensajes del bot.
    if (message.author.bot) return;
    // Ignorar mensajes si la cococadena no está activa o no es el mismo canal.
    if (!cocoChain.isActive || message.channelId !== cocoChain.channelId)
      return;

    // Manejar mensajes que no son el emoji coco.
    if (!isCocoMessage(message.content)) {
      // Comprobar si se alcanzó un nuevo récord.
      if (cocoChain.count > cocoChain.record) {
        setRecord(cocoChain.count);
        interaction.channel?.send(
          `🎉🎉🎉¡Es un nuevo record! ¡El total es ${cocoChain.count}!🎉🎉🎉`
        );
      } else {
        interaction.channel?.send(
          `¡Se acabó el cocotime! ¡El total fue ${cocoChain.count}! y el record es de ${cocoChain.record} cocos.`
        );
      }
      // Reiniciar la cococadena.
      cocoChain.isActive = false;
      cocoChain.count = 0;
    } else {
      // Incrementar el contador si el mensaje es el emoji coco.
      cocoChain.count++;
      // Anunciar cada 10 cocos.
      if (cocoChain.count % 10 === 0) {
        interaction.channel?.send(`¡Llevamos ${cocoChain.count} cocos!`);
      }
    }
  };

  // Agregar el listener al cliente.
  client.on("messageCreate", messageListener);
}
