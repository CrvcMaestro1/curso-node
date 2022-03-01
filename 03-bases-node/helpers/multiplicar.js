const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, hasta = 10, listar = true) => {
    try {
        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.blue} ${i} ${'='.red} ${i * base}\n`;
            salida += `${base} x ${i} = ${i * base}\n`;
        }
        if (listar) {
            console.log(`
            ==============
            TABLA DEL ${base} hasta ${hasta}
            ==============
            `.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}