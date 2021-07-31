export const fecthData = () => {
  return fetch(`https://static.healthforcego.com/grades.json`)
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => console.log(err));
};
