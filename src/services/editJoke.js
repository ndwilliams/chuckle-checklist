export const editJoke = async (joke) => {
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
