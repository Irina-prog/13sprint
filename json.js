const fs = require('fs');

module.exports = async function loadJson(path) {
  const json = await fs.promises.readFile(path, 'utf-8');
  return JSON.parse(json);
};
