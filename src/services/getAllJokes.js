export const getAllJokes = async () => {
  return fetch(`http://localhost:8088/jokes`).then((res) => res.json());
};
