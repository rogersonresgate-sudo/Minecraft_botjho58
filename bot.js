const mineflayer = require('mineflayer');

// Configurações do seu servidor
const config = {
  host: 'sungmar.aternos.me', // Coloque o IP do seu Aternos aqui
  port: 63557,                   // Coloque a porta (padrão é 25565)
  username: 'BotAternos247',     // Nome do bot
  version: '26.3'              // IMPORTANTE: Defina a versão exata do Minecraft do seu servidor
};

function createBot() {
  console.log('[NPC] Conectando ao servidor...');

  const bot = mineflayer.createBot(config);

  bot.on('login', () => {
    console.log(`[NPC] Bot entrou como ${bot.username}`);
  });

  bot.on('spawn', () => {
    console.log('[NPC] Bot nasceu no mundo e está ativo!');
  });

  bot.on('error', (err) => {
    console.error('[NPC] Erro no bot:', err.message);
  });

  bot.on('kicked', (reason) => {
    console.log('[NPC] Bot foi expulso do servidor:', reason);
  });

  bot.on('end', () => {
    console.log('[NPC] Conexão encerrada. Tentando reconectar em 15 segundos...');
    setTimeout(createBot, 15000);
  });
}

// Inicia a função do bot
createBot();

// Tratamento global para não crashar a ação no GitHub sem logs
process.on('uncaughtException', (err) => {
  console.error('[NPC] Exceção não capturada:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[NPC] Rejeição de Promise:', reason);
});
