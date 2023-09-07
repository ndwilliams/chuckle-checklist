import "./App.css";
import { useEffect, useState } from "react";
import { getAllJokes } from "./services/getAllJokes";
import { deleteJoke } from "./services/deleteJoke";
import { Heading } from "./components/heading/Heading";
import { AddJoke } from "./components/jokes/addJoke/AddJoke";

import { ToldJokes } from "./components/jokes/ToldJokes";
import { UntoldJokes } from "./components/jokes/UntoldJokes";

export const App = () => {
  const [allJokes, setAllJokes] = useState([]);

  const fetchAndSetJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  };

  useEffect(() => {
    fetchAndSetJokes();
  }, []);

  return (
    <>
      <div className="app-container">
        <Heading />
        <AddJoke fetchAndSetJokes={fetchAndSetJokes} />
        <div className="joke-lists-container">
          <ToldJokes allJokes={allJokes} fetchAndSetJokes={fetchAndSetJokes} />
          <div className="joke-list-container">
            <UntoldJokes
              allJokes={allJokes}
              fetchAndSetJokes={fetchAndSetJokes}
            />
          </div>
        </div>
      </div>
    </>
  );
};
