const express = require('express');
const app = express();
const port = 3000;

//Static asset
app.use(express.static('public'));

//Server port
app.listen(port, () => {
    console.log(`Server avviato nella porta ${port}`);
});
