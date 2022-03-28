const fs = require('fs');
var colors = require('colors');

colors.enable();

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    
    try { 

        let salida  = '';
        let consola  = '';

        for(let i = 1; i <=  hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i } \n`;
            consola += `${ base } x ${ i } ${ '='.green } ${ base * i } \n`;
        }

        if ( listar ) {
            console.log('==================='.cyan);
            console.log('   Tabla del: ', base);
            console.log('==================='.cyan);
            console.log(consola);
        }
    
        //Escribir datos en un txt
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}


module.exports = {
    crearArchivo
};
