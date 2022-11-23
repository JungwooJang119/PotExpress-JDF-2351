import { connection } from "../../lib/db";

export default function handler(req, res) {
  let corpID = null;
  let longName = null;
  let shortName = null;
  let resAssets = null;

  if (req.method === "POST") {
    req.body.corpID ? (corpID = '"' + req.body.corpID + '"') : (corpID = null);
    req.body.longName
      ? (longName = '"' + req.body.longName + '"')
      : (longName = null);
    req.body.shortName
      ? (shortName = '"' + req.body.shortName + '"')
      : (shortName = null);
    resAssets = req.body.resAssets;
  }

  connection.query(
    "call create_corporation(" +
      corpID +
      "," +
      shortName +
      "," +
      longName +
      "," +
      resAssets +
      ");",
    function (error, results, fields) {
      console.log(results);
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
