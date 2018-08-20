const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDgwNTQ5OTMxNzAzMzM2OTcw.Dlzh-A.2a-9De1wSrsayr2iTrMsqIS83Vg);//where BOT_TOKEN is the token of our bot
