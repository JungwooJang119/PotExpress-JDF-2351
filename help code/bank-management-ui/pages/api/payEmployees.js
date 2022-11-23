import { connection } from "../../lib/db";

export default function handler(req, res) {
  connection.query("call pay_employees()", function (error, results, fields) {
    if (error) throw error;
    res.status(200).json(results);
  });
}
