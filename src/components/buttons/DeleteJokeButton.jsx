import { deleteJoke } from "../../services/jokeService"
import "./ChangeJokeStatus.css"

export const DeleteJokeButton = ({ getAndSetAllJokes, jokeObject }) => {
	const handleDeleteJoke = async (joke) => {
		await deleteJoke(joke)
		getAndSetAllJokes()
	}

	return (
		<button
			className="joke-list-action-delete"
			onClick={async () => {
				handleDeleteJoke(jokeObject)
			}}>
			<i className="fa-solid fa-trash"></i>
		</button>
	)
}
