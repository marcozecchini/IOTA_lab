async function run() {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    let outputs = await client.getAddressOutputs('atoi1qp9427varyc05py79ajku89xarfgkj74tpel5egr9y7xu3wpfc4lkpx0l86');
    console.log(outputs);

    console.log("======================")
    const output = await client.getOutput('835de43bb5563de894f81b501a1ca6f57f074174abe6ca1a8d97e84a27f38dd80100');
    console.log(output);

    console.log("======================")
    outputs = await client.findOutputs(outputIds = [], addresses = ["atoi1qp9427varyc05py79ajku89xarfgkj74tpel5egr9y7xu3wpfc4lkpx0l86"]);
    console.log(outputs);

}

run()