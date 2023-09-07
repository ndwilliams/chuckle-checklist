import { editJoke } from "../../services/editJoke";
import "./JokeDeleteandToggleButton.css";

export const JokeToggleButton = ({ fetchAndSetJokes, joke }) => {
  const editAndPutJoke = async (joke) => {
    joke.told = !joke.told;
    await editJoke(joke);
    fetchAndSetJokes();
  };

  return (
    <div>
      <button
        className="joke-list-action-toggle"
        onClick={() => {
          editAndPutJoke(joke);
        }}
      >
        <i className="fa-solid fa-face-grin-tears" />
      </button>
    </div>
  );
};
