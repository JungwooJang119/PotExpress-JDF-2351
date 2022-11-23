import { connection } from "../../../lib/db";

export default function handler(req, res) {
  let requester = null;
  let bankID = null;
  let accountID = null;
  let toBankID = null;
  let toAccountID = null;

  if (req.method === "POST") {
    req.body.requester
      ? (requester = '"' + req.body.requester + '"')
      : (requester = null);
    req.body.bankID ? (bankID = '"' + req.body.bankID + '"') : (bankID = null);
    req.body.accountID
      ? (accountID = '"' + req.body.accountID + '"')
      : (accountID = null);
    req.body.toBankID
      ? (toBankID = '"' + req.body.toBankID + '"')
      : (toBankID = null);
    req.body.toAccountID
      ? (toAccountID = '"' + req.body.toAccountID + '"')
      : (toAccountID = null);
  }

  connection.query(
    "call start_overdraft(" +
      requester +
      "," +
      bankID +
      "," +
      accountID +
      "," +
      toBankID +
      "," +
      toAccountID +
      ");",
    function (error, results, fields) {
      console.log(results);
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
