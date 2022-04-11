
function run() {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder()
        .node('https://api.lb-0.h.chrysalis-devnet.iota.cafe:443')    // custom node
        .localPow(true)                                         // pow is done locally
        .disableNodeSync()                                      // even non-synced node is fine - do not use in production
        .build();

    client.getInfo().then(console.log).catch(console.error);
}

run()


/**
 * CONSOLE_OUTPUT:
 * {
   "nodeinfo":{
      "name":"HORNET",
      "version":"0.6.0-alpha",
      "isHealthy":true,
      "networkId":"migration",
      "bech32HRP":"atoi",
      "minPoWScore":100,
      "messagesPerSecond":4.2,
      "referencedMessagesPerSecond":4.1,
      "referencedRate":97.61904761904762,
      "latestMilestoneTimestamp":1618139001,
      "latestMilestoneIndex":7092,
      "confirmedMilestoneIndex":7092,
      "pruningIndex":0,
      "features":[
         "PoW"
      ]
   },
   "url":"https://api.lb-0.h.chrysalis-devnet.iota.cafe"
}
 */