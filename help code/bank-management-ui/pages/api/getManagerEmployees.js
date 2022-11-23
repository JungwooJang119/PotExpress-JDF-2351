import { connection } from "../../lib/db";

export default function handler(req, res) {
  let perID = null;

  if (req.method === "POST") {
    perID = '"' + req.body.perID + '"';
  }

  connection.query(
    "select perID from workFor natural join bank where perID !=" + perID + ");",
    function (error, results, fields) {
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );
}
