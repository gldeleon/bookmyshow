const app = require('./app');

//Constants
const PORT = 80;
const HOST = '0.0.0.0';


async function init(){
    await app.listen(PORT, HOST);
    console.log('Server on port 80');
}

init();