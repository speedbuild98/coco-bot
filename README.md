# Cocobot!

<div align="center">

<img width='100px' src="https://github.com/speedbuild98/coco-bot/blob/main/assets/COCOBOT%20LOGO.png"/>

[❤️English](#english) | [💙Español](#español) | [👽Example](#example)

</div>

## English

### Introduction

Cocobot is a Discord bot designed for fun and engagement. Users can invoke two primary commands: `/coco` which drops a coconut emoji (🥥) in the chat, and `/cocotime` which starts a coconut chain (a series of uninterrupted coconut emojis). During a cocochain, Cocobot counts the emojis until someone breaks the chain by sending a different message.

### Requirements

- Node.js
- Discord.js library
- A Discord Bot Token

### Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your Discord Bot Token as `DISCORD_BOT_TOKEN=your_token_here` and your Discord APP ID as `DISCORD_APPLICATION_ID=your_id_here`.
4. Start the bot with `npm run start`.

### Usage

- `/coco`: Sends a coconut emoji to the current chat.
- `/cocotime`: Initiates a cocochain event where Cocobot counts coconut emojis until the chain is broken.

### Additional Information

- Cocobot will announce when a cocochain ends and if a new record is set.
- The record is persisted on record.txt to be compared against in future chains.

## Español

### Introducción

Cocobot es un bot para Discord diseñado para la diversión e interacción. Los usuarios pueden invocar dos comandos principales: `/coco`, que suelta un emoji de coco (🥥) en el chat, y `/cocotime`, que inicia una cococadena (una serie de emojis de coco ininterrumpidos). Durante una cococadena, Cocobot cuenta los emojis hasta que alguien rompe la cadena enviando un mensaje diferente.

### Requisitos

- Node.js
- Biblioteca Discord.js
- Un Token de Bot de Discord

### Configuración

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` con tu Token de Bot de Discord como `DISCORD_BOT_TOKEN=tu_token_aquí` y tu Discord APP ID como `DISCORD_APPLICATION_ID=your_id_here`.
4. Inicia el bot con `npm run start`.
5. Conecta el bot a tu server utilizando una URL OAuth2 con scope bot.

### Uso

- `/coco`: Envía un emoji de coco al chat actual.
- `/cocotime`: Inicia un evento de cococadena donde Cocobot cuenta los emojis de coco hasta que la cadena se rompe.

### Información Adicional

- Cocobot anunciará cuando termine una cococadena y si se establece un nuevo récord.
- El récord se persiste en record.txt para compararlo en futuras cadenas.

## Example

![Authorization screen](https://github.com/speedbuild98/coco-bot/blob/main/assets/BOT%20AUTHORIZE%20SCREEN.png?raw=true)

![Project Structure](https://github.com/speedbuild98/coco-bot/blob/main/assets/BOT%20CODE%20STRUCTURE.png?raw=true)

![Usage](https://github.com/speedbuild98/coco-bot/blob/main/assets/BOT%20EXAMPLE.png?raw=true)

![Permissions](https://github.com/speedbuild98/coco-bot/blob/main/assets/BOT%20PERMISSIONS.png?raw=true)
