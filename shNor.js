const { ShardingManager } = require('discord.js');

const bumbe = new ShardingManager('./index.js', { //main dosyanızı yazın!
	totalShards: 2, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "NzMzNzIwMzI2NjQ2NzkyMjYz.XxHQTQ.Y0DVPPwi5AwLytk73TcsBO2q-90" //Tokeninizi giriniz
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log(`${shard.id} İDli shard başlatıldı!`);
});

//Discord.js v12 İçindir. 