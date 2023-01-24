// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/
const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
  prices : [55, 5, 2]
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
  prices : [55, 5, 2]
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
  prices : [55, 5, 2]
}

const shippingCost = 50;

function priceCart(utente) {
  
  var sum = 0;

  for (var i = 0; i < utente.prices.length; i++) {
    sum += utente.prices[i];
  };
  return sum;
};

function TotalPriceCart(utente) {

  let price = priceCart(utente);
  //Controlliamo quali condizioni d'esistenza si avverano
  if (utente.isAmbassador == true && price > 100) {
    price = price - (price * 0.3);
  } else if (utente.isAmbassador == true && price < 100) {
    price = price - (price * 0.3) + shippingCost;
  } else if (utente.isAmbassador == false && price < 100) {
    price += shippingCost;
  } else {
    price = price;
  };
return price;
};

console.log(TotalPriceCart(amy));





