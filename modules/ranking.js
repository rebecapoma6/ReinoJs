//Tiene que tener una función de batalla que reciba un jugador y un enemigo, que calcule el resultado del combate.
export function batalla(jugador, enemigo) {
  console.log(`⚔️ ${jugador.nombre} entra en batalla contra ${enemigo.nombre}!`);

}


//Tiene que tener una función para agrupar a los jugadores según sun puntuación final: "pro" para los que tengan puntuación alta y "rookie" para el resto.
export function agruparJugadores(jugadores, puntos = 1000) {
  for (let i = 0; i < jugadores.length; i++) {
    if (jugadores[i].puntuacion >= puntos) {
      console.log(`${jugadores[i].nombre} es pro`);
    } else {
      console.log(`${jugadores[i].nombre} es rookie`);
    }
  }
}


//Mostrar el ranking final de todos los jugadores en una tabla
export function mostrarRanking(jugadores) {
  // Ordenar el array directamente
  jugadores.sort(function (a, b) {
    return b.puntuacion - a.puntuacion; // mayor a menor
  });
}