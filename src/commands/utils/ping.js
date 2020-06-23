const Command = require('../../classes/Command')

module.exports = new Command(msg => {
  const client = require('../../components/client')
  const start = new Date(msg.timestamp)
  msg.channel.createMessage('Pong!').then(m => {
    m.edit(`Pong! \`${Math.floor(new Date(m.timestamp) - start)}ms, ${client.shards.random().latency}ms\``) // whatever, latency is pretty consistent across shards anyway
  })
})