/**
 * Esta funcion agarra una carta del deck
 * @param {Array<String>} deck Deck que ya se creó con la funcion 'crearDeck'
 * @returns {String} Regresa una carta 
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}