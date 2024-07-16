import { useState } from "react"
import { postNewJoke } from "../../services/jokeService"
import "./AddJoke.css"

export const AddJoke = ({ getAndSetAllJokes }) => {
	const [newJoke, setNewJoke] = useState("")

	const addNewJoke = async () => {
		if (newJoke) {
			await postNewJoke(newJoke)
			setNewJoke("")
		}
	}

	return (
		<>
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
				<button
					className="joke-input-submit"
					onClick={async () => {
						await addNewJoke()
						getAndSetAllJokes()
					}}>
					Add
				</button>
			</div>
		</>
	)
}
