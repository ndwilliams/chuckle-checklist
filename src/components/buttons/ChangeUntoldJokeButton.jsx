import "./ChangeJokeStatus.css"

export const ChangeUntoldJokeButton = ({ handleToggleJoke, jokeObject }) => {
	return (
		<button
			className="joke-list-action-toggle"
			onClick={async () => {
				handleToggleJoke(jokeObject)
			}}>
			<i className="fa-regular fa-face-meh" />
		</button>
	)
}
