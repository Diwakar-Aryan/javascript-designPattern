const amqp = require("amqplib");

const msg = { number: process.argv[2] };
connect();
async function connect() {
  try {
    const amqpServer = process.env.amqpURL;
    const connection = await amqp.connect(amqpServer);
    const channel = await connection.createChannel();
    await channel.assertQueue("jobs");
    await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log(`Job sent successfully ${msg.number}`);
    await channel.close();
    await connection.close();
    console.log("Waiting for message");
  } catch (error) {
    console.error(error);
  }
}
