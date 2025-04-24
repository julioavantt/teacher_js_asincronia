async function get() {
	try {
		const response = await fetch(
			"https://pokeapi.co/api/v2/pokemon/ditto"
		)
		const data = await response.json()
		throw new Error("Invented")
		console.log(data)
		console.log("Me amo ♥")
	} catch (err) {
		console.error(err)
	}
}

get()
