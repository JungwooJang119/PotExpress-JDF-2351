import { connection } from "../../lib/db";

export default function handler(req, res) {
  let customer = null;

  if (req.method === "POST") {
    req.body.customer
      ? (customer = '"' + req.body.customer + '"')
      : (customer = null);
  }

  connection.query(
    "call stop_customer_role(" + customer + ");",
    function (error, results, fields) {
      console.log(results);
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
