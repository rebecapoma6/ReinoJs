class Producto {
    constructor(nombre, precio, rareza, tipo, bonus){
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.rareza = rareza;
        this.bonus = bonus;
    }

    //Método para mostrar el producto de forma legible

    presentar(){
    // Convierte los bonus a un texto como "ataque+5, defensa+2"
       let bonusTexto = "";
       for(const clave in this.bonus){
        bonusTexto += `${clave} + ${this.bonus[clave]} , `;
       }

    //Quita la ultima coma y espacio
    bonusTexto = bonusTexto.slice(0, -2);

    return `${this.nombre} [${this.rareza}] (${this.tipo}) - ${EUR.format(this.precio)} - ${bonusTexto}`;

    }


    // copia del producto con un descuento aplicado (%)

    aplicarDescuento(porcentaje){
        if(porcentaje < 0) porcentaje = 0;
        if(porcentaje > 100) porcentaje = 100;

        const nuevoPrecio = Math.round(this.precio * (1 - porcentaje / 100));

        return new Producto (this.nombre, nuevoPrecio, this.rareza, this.tipo, this.bonus);
    }


    











}

export { Producto };