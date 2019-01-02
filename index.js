var kafka = require('kafka-node')

const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    // client = new kafka.Client(),
    consumer = new Consumer(
        client,
        [
            { topic: 'contract-events', partition: 0 }
        ],
        {
            autoCommit: false
        }
    );

consumer.on('message', function (message) {
    console.log(message);
});