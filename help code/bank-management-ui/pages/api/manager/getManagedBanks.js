import { connection } from "../../../lib/db";

export default function handler(req, res) {
  let manager = '"' + req.body.manager + '"';
  connection.query(
    "SELECT bankID from bank where manager = " + manager + ";",
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}
