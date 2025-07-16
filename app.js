let $ = document
const button = $.querySelector('#button')
const input = $.querySelector('#numberInput')
const resultsElem = $.querySelector('#results')

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false

    for (var i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false
        }
    }
    return true

}

function allPrimesLessThanN(n) {
    for (var i = 0; i < n; i++) {
        if (isPrime(i)) {
            resultsElem.insertAdjacentHTML('beforeend', `
            <div class="result">${i}</div>
            `)
        }
    }
}

window.cleaner = function () {
    resultsElem.innerHTML = ""
    allPrimesLessThanN(input.value)
}

function keyDown(Event) {
    if (Event.key == 'Enter') {
        resultsElem.innerHTML = ""
        allPrimesLessThanN(input.value)
    }
}
button.addEventListener('click', cleaner)
input.addEventListener('keydown', keyDown)