require('dotenv').config();

async function run() {
    const { ClientBuilder } = require('@iota/client');
  
    // Get the seed from environment variable
    console.log(process.env.IOTA_SEED_SECRET)
    const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;
  
    // client will connect to testnet by default
    const client = new ClientBuilder().build();
  
    const addresses = await client.getAddresses(IOTA_SEED_SECRET)
      .accountIndex(0)
      .range(0, 5)
      .get();
  
    console.log(addresses);

    console.log(`Is the ${addresses[0]} valid: ${client.isAddressValid(addresses[0])}`)
  }
  
  run()