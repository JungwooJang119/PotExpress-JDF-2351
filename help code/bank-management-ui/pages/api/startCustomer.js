import { connection } from "../../lib/db";

export default function handler(req, res) {
  let person = null;

  if (req.method === "POST") {
    req.body.person
      ? (person = '"' + req.body.person + '"')
      : (person = null);
  }

  connection.query(
    "call start_customer_role(" + person + ",null, null, null, null, null, null, null, null, null, null);",
    function (error, results, fields) {
      console.log(results);
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
