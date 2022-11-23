import { connection } from "../../lib/db";

export default function handler(req, res) {
  connection.connect();

  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
    }
  );

  res.status(200).json({ name: "Succ" });

  connection.end();
}
