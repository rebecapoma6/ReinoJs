class Enemigo {

    constructor(tipo, nombre, ataque, vida) {
        this.tipo = 'Enemigo';
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
    }

    presentacion() {
        return `Soy un ${this.tipo} y me llamo (${this.nombre}). Ataque: ${this.ataque}, Vida: ${this.vida}`;
    }
}



class JefeFinal extends Enemigo {
    constructor(nombre, ataque, vida, habilidadEspecial, multiplicadorDanio = 2) {
        super('Jefe', nombre, ataque, vida);
        
        this.habilidadEspecial = habilidadEspecial;
        this.multiplicadorDanio = multiplicadorDanio;


    }

    presentacion() {
        return `Me llamo ${this.nombre} y soy un ${this.tipo} por lo que si... soy el JEFE FINAL. Ataque: ${this.ataque}, Vida: ${this.vida}. 
Habilidad especial: ${this.habilidadEspecial}. Multiplicador de daño: ${this.multiplicadorDanio}`;
    }
}






 const enemigo1 = new Enemigo('Ogro', 'Neckzilla', 2, 1);
 console.log(enemigo1.presentacion());

 const enemigo2 = new Enemigo('Troll', 'Thanos', 2, 1);
 console.log(enemigo1.presentacion());

 const jefeFinal = new JefeFinal('Monstruo', 'KingMuerte', 5, 3);
 console.log(jefe1.presentacion());