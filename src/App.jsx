import { useEffect, useState } from "react"
import { AddJoke } from "./components/jokes/AddJoke"
import { Header } from "./components/header/Header"
import { JokesList } from "./components/jokes/JokesList"
import { getAllJokes } from "./services/jokeService"
import "./App.css"

export const App = () => {
	const [allJokes, setAllJokes] = useState([])

	const getAndSetAllJokes = () => {
		getAllJokes().then((jokesArray) => setAllJokes(jokesArray))
	}
	useEffect(() => {
		getAndSetAllJokes()
	}, [])

	return (
		<div className="app-container">
			<Header />
			<AddJoke getAndSetAllJokes={getAndSetAllJokes} />
			<JokesList allJokes={allJokes} getAndSetAllJokes={getAndSetAllJokes} />
		</div>
	)
}
