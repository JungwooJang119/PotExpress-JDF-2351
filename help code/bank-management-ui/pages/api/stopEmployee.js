import { connection } from "../../lib/db";

export default function handler(req, res) {
  let employee = null;

  if (req.method === "POST") {
    req.body.employee
      ? (employee = '"' + req.body.employee + '"')
      : (employee = null);
  }

  connection.query(
    "call stop_employee_role(" + employee + ");",
    function (error, results, fields) {
      console.log(results);
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
