const reproductor = {
    cancion: '',
    reproducir: nombreCancion => console.log(`reproduciendo la cancion llamada ${nombreCancion}`),
    pausar: () => console.log('pausando...'),
    borrar: nombreCancion => console.log(`borrando la cancion llamada ${nombreCancion}`),
    set nuevaCancion(cancion){
        this.cancion = cancion,
        console.log(`añadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'rosas';
reproductor.obtenerCancion;
