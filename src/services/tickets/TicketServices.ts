
export type TProps =
{
    state?:boolean;
    messages?: string;
}
/** Se validan los billetes permitidos parav poder realizar la venta **/
function validateTickets(valor: number)
{
   return [25, 50, 100].includes(valor);
}

/** Se determina que la primera venta a realizar debe ser con un billete de 25 **/
function firstSale(valor: number, taquilla: number)
{
    const ventas: number[] = JSON.parse(localStorage.getItem('ventas') || '[]');
    /** Si es la primera venta y es con un billete de 25, se guarda y se hace la venta **/
    if (valor === taquilla && ventas.length === 0) 
    {
        ventas.push(valor);
        localStorage.setItem('ventas', JSON.stringify(ventas));
        return { messages: 'Venta exitosa.', state: true};
    } else
    {
        /** Si ya hay ventas realizadas anteriormente **/
        const result = otherSales(valor);
        return { messages: result?.messages, state: result?.state};
    }
    //return { messages: 'Es la primera venta y no puedo recibir un billete mayor a 25.', state: false};
}

/** Punto de entrada al algoritmo de ventas**/
export function sellBoxOffice(valor:number):TProps
{
    const FIRST_SALES = 25
    const result = validateTickets(valor);
    if(!result)
    {
       return {messages: 'El billete ingresado no esta permitido para realizar la venta.', state: false};
    }
    
    return firstSale(valor, FIRST_SALES); 
}

/** Core del algoritmo **/
function otherSales(valor:number)
{
    /** Se definen los valores de los billetes para la devuelta y la venta **/
    const MINIMO = 25;
    const MEDIO = MINIMO * 2;
    const ALTO = MINIMO * 4;

    /** Inicialización de ventas en localStorage **/
    if (!localStorage.getItem('ventas'))
    {
        localStorage.setItem('ventas', JSON.stringify([]));
    }

    /** Compra con un billete de 25, se guarda la venta */
    if (valor === MINIMO)
    {
        const ventas: number[] = JSON.parse(localStorage.getItem('ventas') || '[]');
        ventas.push(valor);
        localStorage.setItem('ventas', JSON.stringify(ventas));
        return { messages: 'Venta realizada correctamente para un billete de '+valor+' dólares', state: true};
    }

    /** Si la compra es con un billete de 50 **/
    if (valor === MEDIO)
    {
        const ventas: number[] = JSON.parse(localStorage.getItem('ventas') || '[]');
        for (const [indice, venta] of ventas.entries()) 
        {
            /** Se valida que una de loas valores de las ventas guardadas sea igual minimo(25) y se esa es la devuelta **/
            if (venta === MINIMO) 
            {
                /** Se elimina el registro en el array de ventas **/
                ventas.splice(indice, 1);

                /** Se agrega el nuevo valor de la venta **/
                ventas.push(valor);
                localStorage.setItem('ventas', JSON.stringify(ventas));
                
                return { messages:`Venta realizada correctamente y se dio devuelta de ${MINIMO} dólares para un billete de ${MEDIO} dólares`, state: true};
            }
        }
        
        return { messages: `No hay vuelto suficiente para realizar la venta con un billete de ${valor} dólares`, state: false};
    }

    /** Se valida si la venta es con un billete de 100 **/
    if (valor === ALTO) 
    {
        const ventas: number[] = JSON.parse(localStorage.getItem('ventas') || '[]');
        const devueltaFija = ALTO - MINIMO; // 75
        let contarDevuelta = 0;
        const restarValores: number[] = [];
    
        for (let i = 0; i < ventas.length; i++)
        {
            
            /** Se valida si se puede dar cambio con un billete de 50 y uno de 25 **/
            if (i + 1 < ventas.length && ventas[i] === MINIMO && ventas[i + 1] === MEDIO)
            {
                contarDevuelta = MINIMO + MEDIO;
                restarValores.push(i, i + 1);
            }
            
            /** Se valida si se puede dar cambio con 3 billeste de 25 */
            else if (i + 2 < ventas.length && ventas[i] === MINIMO && ventas[i + 1] === MINIMO && ventas[i + 2] === MINIMO)
            {
                contarDevuelta = MINIMO * 3;
                restarValores.push(i, i + 1, i + 2);
            }

            if (contarDevuelta === devueltaFija)
            {
                /** Se eliminan los valores usados para la devolución **/
                restarValores.sort((a, b) => b - a).forEach(index => {
                    ventas.splice(index, 1);
                });
                
                /** Se agrega el nuevo billete (100) **/
                ventas.push(valor);
                localStorage.setItem('ventas', JSON.stringify(ventas));
                
                return {messages: `Venta realizada correctamente y se dio devuelta de ${devueltaFija} dólares para un billete de ${ALTO} dólares`, state: true};
            }
        }
    
        return {messages: `No se puede dar cambio para un billete de ${ALTO} dólares.`, state: false};
    }
 }