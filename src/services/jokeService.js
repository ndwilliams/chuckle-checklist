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

export const getAllJokes = async () => {
	const response = await fetch(`http://localhost:8088/jokes`)
	return response.json()
}

export const editJoke = async (editedJoke) => {
	const putOptions = {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(editedJoke),
	}

	await fetch(`http://localhost:8088/jokes/${editedJoke.id}`, putOptions)
}
