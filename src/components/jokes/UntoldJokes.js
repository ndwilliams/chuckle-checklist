import { useEffect, useState } from "react";
import { JokeToggleButton } from "./JokeToggleButton";
import { JokeDeleteButton } from "./JokeDeleteButton";
import "./ToldandUntoldJokes.css";
import { jokeCounter } from "./jokeCounter";

export const UntoldJokes = ({ allJokes, fetchAndSetJokes }) => {
  const [untoldJokes, setUntoldJokes] = useState([]);

  useEffect(() => {
    setUntoldJokes(allJokes.filter((joke) => joke.told === false));
  }, [allJokes]);

  return (
    <div className="joke-list-container">
      <h2>
        Untold<span className="untold-count">{jokeCounter(untoldJokes)}</span>
      </h2>
      {untoldJokes.map((joke) => {
        return (
          <li className="joke-list-item" key={joke.id}>
            <p className="joke-list-item-text">{joke.text}</p>
            <div>
              <JokeDeleteButton
                joke={joke}
                fetchAndSetJokes={fetchAndSetJokes}
              />
            </div>
            <JokeToggleButton joke={joke} fetchAndSetJokes={fetchAndSetJokes} />
          </li>
        );
      })}
    </div>
  );
};
