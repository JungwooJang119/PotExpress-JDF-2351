import { connection } from "../../../lib/db";

export default function handler(req, res) {
  let userID = '"' + req.body.customer + '"';
  connection.query(
    "select distinct accountID, bankID from savings natural join access;",
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}
