const jsonServer = require('json-server');

const mockServerData = require('./mockServerData');
const server = jsonServer.create();
const router = jsonServer.router({});

const options = {
    logger: false
};

const middlewares = jsonServer.defaults(options);

server.use(middlewares);

const mockServerDataJson = mockServerData();

server.get('/v1/goodsPosition', (req, res) => {
    const data = mockServerDataJson.data;
    res.jsonp(data);
});

server.use(router);

server.listen(2000, () => {
    console.log('JSON Server is running');
});
