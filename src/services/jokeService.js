export const postJoke = async (joke) => {
  const jokeObject = {
    text: joke,
    told: false,
  };

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObject),
  };

  const response = await fetch(`http://localhost:8088/jokes`, postOptions);
};

export const getAllJokes = async () => {
  return fetch(`http://localhost:8088/jokes`).then((res) => res.json());
};

export const putEditedJoke = async (joke) => {
  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  };

  const response = await fetch(
    `http://localhost:8088/jokes/${joke.id}`,
    putOptions
  );
};

export const deleteJoke = async (joke) => {
  const deleteOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    `http://localhost:8088/jokes/${joke.id}`,
    deleteOptions
  );
};
