export const postNewJoke = async (newJoke) => {
	const jokeObject = {
		text: newJoke,
		told: false,
	}

	const postOptions = {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(jokeObject),
	}
	await fetch(`http://localhost:8088/jokes`, postOptions)
}
