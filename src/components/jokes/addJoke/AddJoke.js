import { useState } from "react";
import { postNewJoke } from "../../../services/postNewJoke";
import "./AddJoke.css";

export const AddJoke = ({ fetchAndSetJokes }) => {
  const [newJoke, setNewJoke] = useState("");

  return (
    <div className="joke-add-form">
      <input
        className="joke-input"
        type="text"
        value={newJoke}
        placeholder="New One Liner"
        onChange={(event) => {
          setNewJoke(event.target.value);
        }}
      ></input>
      <button
        className="joke-input-submit"
        onClick={() => {
          if (newJoke) {
            postNewJoke(newJoke).then(setNewJoke(""), fetchAndSetJokes());
          }
        }}
      >
        Add
      </button>
    </div>
  );
};
