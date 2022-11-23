import { connection } from "../../lib/db";

export default function handler(req, res) {
  let person = null;
  let salary = null;
  let numPayments = null;
  let accumEarnings = null;

  if (req.method === "POST") {
    req.body.person
      ? (person = '"' + req.body.person + '"')
      : (person = null);
    salary = req.body.salary;
    numPayments = req.body.numPayments;
    accumEarnings = req.body.accumEarnings;
  }

  connection.query(
    "call start_employee_role(" + person + ",null,null,null,null,null,null,null,null,null," + salary + "," + numPayments + "," + accumEarnings + ", null);",
    function (error, results, fields) {
      console.log(results);
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
