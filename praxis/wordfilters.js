const fs = require("fs");

const getWords = (whichFile) => {
  fs.readFile(whichFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(data.length);
    return data;
  });
};
