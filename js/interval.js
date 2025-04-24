let n = 0
let timer = null
const h2 = document.querySelector("h2")

function addOne() {
	n++
	if (n > 9) clearInterval(timer)
	h2.textContent = n
}

timer = setInterval(addOne, 1000)
