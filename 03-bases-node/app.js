const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

console.clear();

crearArchivo(argv.base, argv.hasta, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
