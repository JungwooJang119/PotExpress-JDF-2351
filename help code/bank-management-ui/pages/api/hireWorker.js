import { connection } from "../../lib/db";

export default function handler(req, res) {
  let perID = null;
  let bankID = null;
  let salary = null;

  if (req.method === "POST") {
    perID = req.body.perID;
    bankID = req.body.bankID;
    salary = req.body.salary;
  }

  connection.query(
    "call hire_worker(" +
      '"' +
      perID +
      '"' +
      "," +
      '"' +
      bankID +
      '"' +
      "," +
      salary +
      ");",
    function (error, results, fields) {
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
