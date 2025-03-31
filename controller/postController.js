const posts = require('../data/posts.js');

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const requestId = parseInt(req.params.id);
    let resultSearch = posts.find((element) => element.id === requestId);

    if (!resultSearch) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    res.json(resultSearch);
}

function create(req, res) {
    const newId = posts[posts.length - 1].id + 1;

    const newPosts = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPosts);

    res.status(201);
    res.json(newPosts);
}

function update(req, res) {
    res.send(`Modifica integrale dell'elemento con id ${req.params.id}`);
}

function patch(req, res) {
    res.send(`Modifica parziale dell'elemento con id ${req.params.id}`);
}

function destroy(req, res) {
    const requestId = parseInt(req.params.id);
    let resultSearch = posts.find((element) => element.id === requestId);

    posts.splice(posts.indexOf(resultSearch), 1);

    if (!resultSearch) {
        res.status(404);
        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    }

    console.log(posts);

    res.status(204);
}


// export all function
module.exports = { index, show, create, update, patch, destroy }