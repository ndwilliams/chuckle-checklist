import { useState } from "react"
import "./App.css"
import { postNewJoke } from "./services/jokeService"

export const App = () => {
	const [newJoke, setNewJoke] = useState("")
	const [allJokes, setAllJokes] = useState([])

	const addNewJoke = () => {
		postNewJoke(newJoke).then(setNewJoke(""))
	}

	return (
		<div className="app-container">
			<div className="app-heading">
				<h1 className="app-heading-text">Chuckle Checklist</h1>
			</div>
			<h2>Add Joke</h2>
			<div className="joke-add-form">
				<input
					className="joke-input"
					type="text"
					value={newJoke}
					placeholder="New One Liner"
					onChange={(event) => {
						setNewJoke(event.target.value)
					}}
				/>
				<button className="joke-input-submit" onClick={addNewJoke}>
					Add
				</button>
			</div>
		</div>
	)
}
