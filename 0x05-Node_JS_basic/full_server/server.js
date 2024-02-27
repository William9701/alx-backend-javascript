import express from 'express';
import routes from './routes';

const app = express();

routes(app);

app.listen(1245);

export default app;
module.exports = app;
