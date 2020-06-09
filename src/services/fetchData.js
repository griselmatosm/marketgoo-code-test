const getDataLocal = () => {
  return fetch('./data/covid19.json').then(response => response.json())
  .then(data => {
    let results = data.Global
    return results
  })
};

export default {
  getDataLocal,
};
