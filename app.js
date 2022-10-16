import config from 'config'
import express from 'express';
import bp from 'body-parser';
import cp from 'cookie-parser';

import { 
  signUpRoute, 
  signInRoute,
  refreshSessionRoute,
  signOutRoute,  
} from './src/routes/index.js'


const PORT = config.get('port');
const app = express()

app.disable('x-powered-by');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cp());

/* ROUTES */ 

/** @path http://localhost:3000/api/v1/signup */
app.use('/api/v1', signUpRoute);
/** @path http://localhost:3000/api/v1/signin */
app.use('/api/v1', signInRoute);
/** @path http://localhost:3000/api/v1/signout */
app.use('/api/v1', signOutRoute);
/** @path http://localhost:3000/api/v1/refresh */
app.use('/api/v1', refreshSessionRoute);

/* APP  */

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server work on http://localhost:${PORT}`);
    })
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();




// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('key2', 'value gogogogo');
// const value = await client.get('key2');

// console.log(value);