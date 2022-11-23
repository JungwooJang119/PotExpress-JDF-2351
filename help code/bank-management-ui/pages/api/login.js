import { connection } from "../../lib/db";

export default function handler(req, res) {
  let userID = "";
  let password = "";

  console.log(req);
  if (req.method === "POST") {
    userID = req.body.userID;
    password = req.body.password;
  }

  connection.query(
    "select perID," +
      "CASE WHEN perID in (select perID from system_admin) THEN 'a' " +
      "WHEN perID in (select e.manager from bank as e, customer as c where e.manager = c.perID) THEN 'e&c' " +
      "WHEN perID in (select perID from customer) THEN 'c' " +
      "WHEN perID in (select manager from bank) THEN 'e' " +
      "ELSE 'n'" +
      "END as role from person " +
      'where perID="' +
      userID +
      '" and pwd="' +
      password +
      '";',
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
}
