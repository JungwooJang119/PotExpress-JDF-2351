import { connection } from "../../lib/db";

export default function handler(req, res) {
  connection.query(
    "select perID from employee where perID not in (SELECT manager from bank) and perID not in (SELECT perID from workFor);",
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}
