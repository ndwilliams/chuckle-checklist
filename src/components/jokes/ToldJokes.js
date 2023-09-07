import { useEffect, useState } from "react";
import { JokeDeleteButton } from "./JokeDeleteButton";
import { JokeToggleButton } from "./JokeToggleButton";
import "./ToldandUntoldJokes.css";
import { jokeCounter } from "./jokeCounter";

export const ToldJokes = ({ allJokes, fetchAndSetJokes }) => {
  const [toldJokes, setToldJokes] = useState([]);

  useEffect(() => {
    setToldJokes(allJokes.filter((joke) => joke.told === true));
  }, [allJokes]);

  return (
    <div className="joke-list-container">
      <h2>
        Told<span className="told-count">{jokeCounter(ToldJokes)}</span>
      </h2>
      {toldJokes.map((joke) => {
        return (
          <li className="joke-list-item" key={joke.id}>
            <p className="joke-list-item-text">{joke.text}</p>
            <JokeDeleteButton fetchAndSetJokes={fetchAndSetJokes} joke={joke} />
            <JokeToggleButton joke={joke} fetchAndSetJokes={fetchAndSetJokes} />
          </li>
        );
      })}
    </div>
  );
};
