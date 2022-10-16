import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('key2', 'value gogogogo');
const value = await client.get('key2');

console.log(value);