const posts = require('../data/posts.js');

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const requestId = parseInt(req.params.id);
    let resultSearch = posts.find((element) => element.id === requestId);

    res.json(resultSearch);
}
function create(req, res) {
    res.send(`Creare un nuovo elemento`);
}
function update(req, res) {
    res.send(`Modifica integrale dell'elemento con id ${req.params.id}`);
}

function patch(req, res) {
    res.send(`Modifica parziale dell'elemento con id ${req.params.id}`);
}


function destroy(req, res) {
    res.send(`Eliminazione dell'elemento con id ${req.params.id}`);
}


// export all function
module.exports = { index, show, create, update, patch, destroy }