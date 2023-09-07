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
