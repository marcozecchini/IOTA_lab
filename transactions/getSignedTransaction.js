async function run(){
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    const message_data = await client.getMessage().data("6014c77bceb665b1e1bda28d65c880da34028a96b973cfd738bb3e0b561c0ae2");
    console.log(message_data);
}

run()