async function get() {
	const response = await fetch(
		"https://pokeapi.co/api/v2/pokemon/ditto"
	)
	const data = await response.json()
	console.log(data)
	console.log("Me amo ♥")
}

get()
