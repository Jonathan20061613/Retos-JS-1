// verifica si un número es primo
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//genera los números primos menores que n
function generatePrimes(n) {
    const primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Manejar el evento del botón
document.getElementById('generateButton').addEventListener('click', () => {
    const inputValue = document.getElementById('numberInput').value;
    const n = parseInt(inputValue, 10);

    if (isNaN(n) || n < 2) {
        alert('Por favor, ingresa un número entero positivo mayor que 1.');
        return;
    }

    const primeNumbers = generatePrimes(n);
    const primeList = document.getElementById('primeList');
    primeList.innerHTML = ''; // Limpiar la lista anterior

    // Mostrar los números primos en la lista
    primeNumbers.forEach(prime => {
        const li = document.createElement('li');
        li.textContent = prime;
        primeList.appendChild(li);
    });
});