import { connection } from "../../../lib/db";

export default function handler(req, res) {
  let employee = null;
  let bank = null;
  let newSalary = 0;


  if (req.method === "POST") {
    req.body.employee ? (employee = '"' + req.body.employee + '"') : (employee = null);
    req.body.bank ? (bank = '"' + req.body.bank + '"') : (bank = null);
    newSalary = req.body.newSalary;
  }

  connection.query(
    "call replace_Manager(" +
      employee +
      "," +
      bank +
      "," +
      newSalary +
      ");",
    function (error, results, fields) {
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );

}
