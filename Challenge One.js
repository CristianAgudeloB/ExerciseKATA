//MD5 HASH: 9417c30bbc0d1394ccd61679b802e6ef

const S = 9;

function RemoveDigit(arr, S) {

    if (arr.length > 100) {
        console.error('La lista no puede tener más de 100 elementos.');
        return;
    }

    function removeInvalidDigits(num, S) {
        let OriginalNum = num.toString();
        let filteredNum = OriginalNum.split('').filter(digit => digit < S).join('');
        if (filteredNum.length === 0) return null; // Se retorna null si se eliminó por completo el número

        return parseInt(filteredNum); // Se retorna el número filtrado si solo se eliminó algún dígito
    }

    let RemovedArray = arr.map(num => removeInvalidDigits(num, S)).filter(num => num !== null);

    // Verificamos si el array está ordenado de forma ascendente
    let isAscending = true;
    for (let i = 1; i < RemovedArray.length; i++) {
        if (RemovedArray[i] < RemovedArray[i - 1]) {
            isAscending = false;
            break;
        }
    }

    if (isAscending) {
        let start = 0;
        let end = RemovedArray.length - 1;
        while (start < end) {
            [RemovedArray[start], RemovedArray[end]] = [RemovedArray[end], RemovedArray[start]];
            start++;
            end--;
        }
    } else {
        for (let i = 0; i < RemovedArray.length - 1; i++) {
            for (let j = 0; j < RemovedArray.length - i - 1; j++) {
                if (RemovedArray[j] > RemovedArray[j + 1]) {
                    [RemovedArray[j], RemovedArray[j + 1]] = [RemovedArray[j + 1], RemovedArray[j]];
                }
            }
        }
    }

    let resultArray = RemovedArray;

    console.log(resultArray);
}

// Ejemplos
RemoveDigit([1, 2, 3, 4, 5, 9, 99], S);       
RemoveDigit([10, 20, 30, 49], S);         
RemoveDigit([69], S);                      
RemoveDigit([99], S);                     
RemoveDigit([60], S);                     
RemoveDigit([9, 2, 1], S);                
RemoveDigit([90, 9, 5, 4, 3, 2, 7, 7, 29, 1], S);


