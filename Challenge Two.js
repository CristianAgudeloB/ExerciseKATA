//MD5 HASH: 9417c30bbc0d1394ccd61679b802e6ef

const S = 9;

function squaredList(arr, S) {
    let SS = S * 11;

    // Array con los cuadrados
    let squaredArray = arr.map(num => num * num);

    // Filtrar los valores que estén fuera del rango
    let RemovedArray = squaredArray.filter(num => num >= 0 && num <= SS);

    // Ordenar el array usando una implementación de bubble sort
    for (let i = 0; i < RemovedArray.length - 1; i++) {
        for (let j = 0; j < RemovedArray.length - i - 1; j++) {
            if (RemovedArray[j] > RemovedArray[j + 1]) {
                [RemovedArray[j], RemovedArray[j + 1]] = [RemovedArray[j + 1], RemovedArray[j]];
            }
        }
    }

    console.log(RemovedArray);
}

// Ejemplos
squaredList([1, 2, 3, 5, 6, 8, 9, 10], S);  
squaredList([-2, -1], S);                  
squaredList([-6, -5, 0, 5, 6, 9, 20], S);         
squaredList([-10, 9], S);
             
