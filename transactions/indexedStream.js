const mqtt = require ('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1:1883');

//connect and subscribe to topic
client.on('connect', function () {
    client.subscribe('test');
    console.log('MQTT client has subscribed successfully');
  });
  
  
// get data
client.on('message', function (topic, message) {
    send(message);
});

async function send(msg) {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    const message = await client.message()
        .index('Sensor Stream')
        .data(msg)
        .submit();

    console.log(message);
}