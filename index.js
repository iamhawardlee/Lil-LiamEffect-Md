const bot = require(__dirname + '/lib/amd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting Lil LiamEffect Md ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
/**
LIL LIAM EFFECT TECH WHATSAPPP BOT
**/
