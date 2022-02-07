import express from 'express';
import cors from 'cors';

import Routes from './src/routes';

const app = express();

app.use(cors());

app.use('/', Routes);

app.listen('3000', () => {
   console.log('on air'); 
});