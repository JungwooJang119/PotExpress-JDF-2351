import { connection } from "../../lib/db";

export default function handler(req, res) {
  let bank = null;
  let account = null;
  let feeType = null;

  if (req.method === "POST") {
    req.body.bank ? (bank = '"' + req.body.bank + '"') : (bank = null);
    req.body.account
      ? (account = '"' + req.body.account + '"')
      : (account = null);
    req.body.feeType
      ? (feeType = '"' + req.body.feeType + '"')
      : (feeType = null);
  }

  connection.query(
    "call create_fee(" + bank + "," + account + "," + feeType + ");",
    function (error, results, fields) {
      console.log(results);
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
