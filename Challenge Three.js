//MD5 HASH: 9417c30bbc0d1394ccd61679b802e6ef

function getMinChange(coins) {
    // Ordenar las monedas
    coins.sort((a, b) => a - b);
  
    // Inicialización contador de cambio
    let currentChange = 0;
  
    for (const coin of coins) {
      // Si la moneda actual es mayor que el cambio + 1, encontramos el cambio mínimo que no podemos crear
      if (coin > currentChange + 1) {
        break;
      }
      currentChange += coin;
    }
  
    return currentChange + 1;
  }
  
  // Ejemplos
  console.log(getMinChange([5, 7, 1, 1, 2, 3, 22])); // Debería devolver 20
  console.log(getMinChange([1, 1, 1, 1, 1])); // Debería devolver 6
  console.log(getMinChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // Debería devolver 55
  console.log(getMinChange([1, 2, 4, 9])); // Debería devolver 8
  console.log(getMinChange([1, 2, 4, 7])); // Debería devolver 15