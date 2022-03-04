require('dotenv').config();
const { inquirerMenu, pausa, leerInput, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
    const busquedas = new Busquedas();
    let opt;
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                // mostrar mensajes
                const termino = await leerInput('Ciudad: ');
                // buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                // seleccionar el lugar
                const id = await listarLugares(lugares);
                if (id === '0') continue;
                const lugarSelected = lugares.find(l => l.id === id);
                busquedas.agregarHistorial(lugarSelected.nombre);
                // clima
                const clima = await busquedas.climaLugar(lugarSelected.lat, lugarSelected.lng);
                if (clima === null) continue;
                // mostrar resultados
                console.clear();
                console.log('\Información de la ciudad'.green);
                console.log('Ciudad: ', lugarSelected.nombre.green);
                console.log('Lat: ', lugarSelected.lat);
                console.log('Lng: ', lugarSelected.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Mínima: ', clima.min);
                console.log('Máxima: ', clima.max);
                console.log('Como está el clima: ', clima.desc.green);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;
        }
        if (opt !== 0) await pausa();
    } while (opt !== 0);
}

main();