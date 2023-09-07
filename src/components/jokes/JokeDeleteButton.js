import { deleteJoke } from "../../services/deleteJoke";
import "./JokeDeleteandToggleButton.css";

export const JokeDeleteButton = ({ fetchAndSetJokes, joke }) => {
  return (
    <div>
      <button
        className="joke-list-action-delete"
        onClick={async () => {
          await deleteJoke(joke);
          fetchAndSetJokes();
        }}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
