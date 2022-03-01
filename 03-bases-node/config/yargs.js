const argv = require('yargs')
    .option('b', {
        describe: 'Base de multiplicación',
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        describe: 'Muestra la tabla en consola',
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .option('h',{
        describe: 'Limite de multiplicación',
        alias: 'hasta',
        type: 'number',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser un número';
        }
        if(isNaN(argv.hasta)){
            throw 'Hasta debe ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;