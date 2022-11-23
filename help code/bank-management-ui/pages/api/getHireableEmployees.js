import { connection } from "../../lib/db";

export default function handler(req, res) {
  connection.query(
    "select perID from employee where perID not in (select manager from bank);",
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}
