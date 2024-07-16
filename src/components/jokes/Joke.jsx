import { editJoke } from "../../services/jokeService"
import { ChangeToldJokeButton } from "../buttons/ChangeToldJokeButton"
import { ChangeUntoldJokeButton } from "../buttons/ChangeUntoldJokeButton"
import { DeleteJokeButton } from "../buttons/DeleteJokeButton"
import "./Joke.css"

export const Joke = ({ getAndSetAllJokes, jokeObject }) => {
	const handleToggleJoke = async (joke) => {
		joke.told = !joke.told
		await editJoke(joke)
		getAndSetAllJokes()
	}

	return (
		<li className="joke-list-item" key={jokeObject.id}>
			<p className="joke-list-item-text">{jokeObject.text}</p>
			{jokeObject.told ? (
				<ChangeToldJokeButton
					handleToggleJoke={handleToggleJoke}
					jokeObject={jokeObject}
				/>
			) : (
				<ChangeUntoldJokeButton
					handleToggleJoke={handleToggleJoke}
					jokeObject={jokeObject}
				/>
			)}

			<DeleteJokeButton
				getAndSetAllJokes={getAndSetAllJokes}
				jokeObject={jokeObject}
			/>
		</li>
	)
}
