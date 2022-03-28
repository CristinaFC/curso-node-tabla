const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
        },
        'l' : {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicar',
        },
        'h' : {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Limita el número de multiplicaciones',
        }
        
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ) {
            throw 'La base tiene que ser un número'
        }else if ( isNaN( argv.h ) ) {
            throw 'El limistador "hasta" debe ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;