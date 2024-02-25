import express from 'express';
import bodyParser from 'body-parser';
import ticketRoutes from './src/routes/ticketRoutes';
import { mongoConnect } from './src/utils/database';
import path from "path";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(ticketRoutes);

mongoConnect(() => {
    app.listen(3000);
});
