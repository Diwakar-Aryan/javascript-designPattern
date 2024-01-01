const amqp = require("amqplib");

const msg = { number: process.argv[2] };
connect();
async function connect() {
  try {
    const amqpServer =
      "amqps://dyvbimiz:0x9icLj2z3BTRL_PH0QOYQdjdPer4qb_@puffin.rmq2.cloudamqp.com/dyvbimiz";
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
