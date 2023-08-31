import "./App.css";
import { useEffect, useState } from "react";
import {
  deleteJoke,
  getAllJokes,
  postJoke,
  putEditedJoke,
} from "./services/jokeService.js";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);

  const fetchAndSetJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  };

  useEffect(() => {
    fetchAndSetJokes();
  }, []);

  useEffect(() => {
    setUntoldJokes(allJokes.filter((joke) => joke.told === false));
    setToldJokes(allJokes.filter((joke) => joke.told === true));
  }, [allJokes]);

  const jokeCounter = (jokesArray) => {
    let count = 0;
    count = jokesArray.length;
    return count;
  };

  const untoldJokesCount = jokeCounter(untoldJokes);
  const toldJokesCount = jokeCounter(toldJokes);

  const editAndPutJoke = async (joke) => {
    joke.told = !joke.told;
    await putEditedJoke(joke);
    fetchAndSetJokes();
  };

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
            setNewJoke(event.target.value);
          }}
        ></input>
        <button
          className="joke-input-submit"
          onClick={async () => {
            await postJoke(newJoke);
            setNewJoke("");
            fetchAndSetJokes();
          }}
        >
          Add
        </button>
      </div>
      <div className="joke-lists-container">
        <div className="joke-list-container">
          <h2>
            Told<span className="told-count">{toldJokesCount}</span>
          </h2>
          {toldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                <p className="joke-list-item-text">{joke.text}</p>
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
                <div>
                  <button
                    className="joke-list-action-toggle"
                    onClick={async () => {
                      await editAndPutJoke(joke);
                    }}
                  >
                    <i className="fa-solid fa-face-grin-tears" />
                  </button>
                </div>
              </li>
            );
          })}
        </div>
        <div className="joke-list-container">
          <h2>
            Untold<span className="untold-count">{untoldJokesCount}</span>
          </h2>
          {untoldJokes.map((joke) => {
            return (
              <li className="joke-list-item" key={joke.id}>
                <p className="joke-list-item-text">{joke.text}</p>
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
                <div>
                  <button
                    className="joke-list-action-toggle"
                    onClick={async () => {
                      await editAndPutJoke(joke);
                    }}
                  >
                    <i className="fa-solid fa-face-grimace" />
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};
