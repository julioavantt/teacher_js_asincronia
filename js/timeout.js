console.log("Antes loop")

const loop = () => {
	Array.from(Array(100000000).keys()).forEach(
		i => (i / 5) * 4 ** 19000896
	)
	console.log("loop")
}

setTimeout(loop, 0)

console.log("Después loop")



