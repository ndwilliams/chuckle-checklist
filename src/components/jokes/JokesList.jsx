import { useEffect, useState } from "react"
import "./JokesList.css"
import { Joke } from "./Joke"

export const JokesList = ({ allJokes, getAndSetAllJokes }) => {
	const [untoldJokes, setUntoldJokes] = useState([])
	const [toldJokes, setToldJokes] = useState([])

	const getAllToldJokes = () => {
		const filteredToldJokes = allJokes.filter((joke) => joke.told)
		setToldJokes(filteredToldJokes)
	}

	const getAllUntoldJokes = () => {
		const filteredUntoldJokes = allJokes.filter((joke) => joke.told === false)
		setUntoldJokes(filteredUntoldJokes)
	}

	useEffect(() => {
		getAllToldJokes()
		getAllUntoldJokes()
	}, [allJokes])

	return (
		<div className="joke-lists-container">
			<div className="joke-list-container">
				<h2>
					Told Jokes <span className="told-count">{toldJokes.length}</span>
				</h2>
				{toldJokes.map((jokeObject) => {
					return (
						<Joke
							key={jokeObject.id}
							getAndSetAllJokes={getAndSetAllJokes}
							jokeObject={jokeObject}
						/>
					)
				})}
			</div>
			<div className="joke-list-container">
				<h2>
					Untold Jokes{" "}
					<span className="untold-count">{untoldJokes.length}</span>
				</h2>
				{untoldJokes.map((jokeObject) => {
					return (
						<Joke
							key={jokeObject.id}
							jokeObject={jokeObject}
							getAndSetAllJokes={getAndSetAllJokes}
						/>
					)
				})}
			</div>
		</div>
	)
}
