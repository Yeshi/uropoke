const fs = require("fs");
//const path = require("path");

//結果json
let result = [];

//pokemonListを読み込んで配列に入れる
const pokeList = JSON.parse(
  fs.readFileSync(__dirname + "/data/pokemonList.json", "utf-8")
);

//filelistを取得して配列に入れる
const fileList = fs.readdirSync(__dirname + "/images");

//pokemonListを基にjsonファイルを整形
for (let i = 0; i < pokeList.length; i++) {
  result[i] = { pokeName: pokeList[i], drawings: [] };
}

//filelistを基にデータを入れる
for (let i = 0; i < fileList.length; i++) {
  const fileName = fileList[i].split("_");
  const pokeNo = parseInt(fileName[0]);

  // 規定のファイル命名だったら
  if (pokeNo) {
    //日付データを整形
    const update =
      "20" +
      fileName[1].substring(0, 2) +
      "-" +
      fileName[1].substring(2, 4) +
      "-" +
      fileName[1].substring(4, 6);
    result[pokeNo - 1].drawings.push({ file: fileList[i], date: update });
  }
}

// jsonファイル上書き
fs.writeFileSync("drawList.json", JSON.stringify(result, null, "  "));
