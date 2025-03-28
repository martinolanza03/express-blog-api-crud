const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/postRouter.js');

//Static asset
app.use(express.static('public'));

//Call routes in postsRouter.js
app.use('/posts', postsRouter);

//Server port
app.listen(port, () => {
    console.log(`Server avviato nella porta ${port}`);
});
