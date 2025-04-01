const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/postRouter.js');
const errorsHandler = require('./middleware/errorHandler.js')

//Static asset
app.use(express.static('public'));

//Register the body-parser
app.use(express.json());

//Call routes in postsRouter.js
app.use('/posts', postsRouter);

//Call the middleware
app.use(errorsHandler);

//Server port
app.listen(port, () => {
    console.log(`Server avviato nella porta ${port}`);
});
