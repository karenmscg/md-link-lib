const chalk = require("chalk");
const fs = require("fs");

function takeLink(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultArray = [];
  let temp;
  while ((temp = regex.exec(texto)) != null) {
    resultArray.push({ [temp[1]]: temp[2] });
  }

  return resultArray;
}

function getError(err) {
  throw new Error(chalk.red(err.code, "Your code has errors"));
}

async function getFile(fileRoute) {
  const enconding = "utf-8";
  try {
    const text = await fs.promises.readFile(fileRoute, enconding);
    console.log(takeLink(text));
  } catch (err) {
    getError(err);
  }
}

// function getFile(fileRoute) {
//   const enconding = "utf-8";
//   fs.promises
//     .readFile(fileRoute, enconding)
//     .then((text) => console.log(text))
//     .catch((err) => getError(err));
// }

// function getFile(fileRoute) {
//   const enconding = "utf-8";
//   fs.readFile(fileRoute, enconding, (err, data) => {
//       if (err) {
//           getError(err)
//       }
//     console.log(chalk.blue(data));
//   });
// }

// console.log(getFile("./files/texto1.md"));

module.exports = getFile;
