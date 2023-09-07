export const postNewJoke = async (joke) => {
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
