const descripcion = {    
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'        
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
                .command('crear','Crear un elemento', {
                    descripcion
                })
                .command('actualizar','Actualizar estado', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borrar una tarea', {
                    descripcion
                })
                .help()
                .argv;

                module.exports = {
                    argv
                }