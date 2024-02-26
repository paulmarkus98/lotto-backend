import express from 'express';
import bodyParser from 'body-parser';
import ticketRoutes from './src/routes/ticketRoutes';
import { mongoConnect } from './src/utils/database';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(ticketRoutes);

mongoConnect(() => {
    app.listen(3000);
});
