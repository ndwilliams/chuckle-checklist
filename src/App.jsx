import { useEffect, useState } from "react"
import stevePic from "./assets/steve.png"
import "./App.css"
import { editJoke, getAllJokes, postNewJoke } from "./services/jokeService"

export const App = () => {
	const [newJoke, setNewJoke] = useState("")
	const [allJokes, setAllJokes] = useState([])
	const [untoldJokes, setUntoldJokes] = useState([])
	const [toldJokes, setToldJokes] = useState([])

	const getAndSetAllJokes = () => {
		getAllJokes().then((jokesArray) => setAllJokes(jokesArray))
	}
	useEffect(() => {
		getAndSetAllJokes()
	}, [])

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

	const addNewJoke = () => {
		if (newJoke) {
			postNewJoke(newJoke).then(setNewJoke("")).then(getAndSetAllJokes)
		}
	}
	const handleToggleJoke = async (joke) => {
		joke.told = !joke.told
		await editJoke(joke)
		getAndSetAllJokes()
	}

	return (
		<div className="app-container">
			<div className="app-heading">
				<div className="app-heading-circle">
					<img className="app-logo" src={stevePic} alt="Good job Steve" />
				</div>
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
			<div className="joke-lists-container">
				<div className="joke-list-container">
					<h2>
						Told Jokes <span className="told-count">{toldJokes.length}</span>
					</h2>
					{toldJokes.map((jokeObject) => {
						return (
							<li className="joke-list-item" key={jokeObject.id}>
								<p className="joke-list-item-text">{jokeObject.text}</p>
								<button
									className="joke-list-action-toggle"
									onClick={async () => {
										handleToggleJoke(jokeObject)
									}}>
									<i className="fa-regular fa-face-laugh-squint" />
								</button>
							</li>
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
							<li className="joke-list-item" key={jokeObject.id}>
								<p className="joke-list-item-text">{jokeObject.text}</p>
								<button
									className="joke-list-action-toggle"
									onClick={async () => {
										handleToggleJoke(jokeObject)
									}}>
									<i className="fa-regular fa-face-meh" />
								</button>
							</li>
						)
					})}
				</div>
			</div>
		</div>
	)
}
