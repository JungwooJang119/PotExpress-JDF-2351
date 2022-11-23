import { connection } from "../../lib/db";

export default function handler(req, res) {
  let bankID = null;
  let name = null;
  let street = null;
  let city = null;
  let state = null;
  let zip = null;
  let resAssets = null;
  let corpID = null;
  let employee = null;
  let manager = null;

  if (req.method === "POST") {
    req.body.bankID ? (bankID = '"' + req.body.bankID + '"') : (bankID = null);
    req.body.street ? (street = '"' + req.body.street + '"') : (street = null);
    req.body.city ? (city = '"' + req.body.city + '"') : (city = null);
    req.body.state ? (state = '"' + req.body.state + '"') : (state = null);
    req.body.zip ? (zip = '"' + req.body.zip + '"') : (zip = null);
    resAssets = req.body.resAssets;
    req.body.corpID ? (corpID = '"' + req.body.corpID + '"') : (corpID = null);
    req.body.employee ? (employee = '"' + req.body.employee + '"') : (employee = null);
    req.body.manager ? (manager = '"' + req.body.manager + '"') : (manager = null);
    req.body.name ? (name = '"' + req.body.name + '"') : (name = null);
  }

  connection.query(
    "call create_bank(" +
      bankID +
      "," +
      name +
      "," +
      street +
      "," +
      city +
      "," +
      state +
      "," +
      zip +
      "," +
      resAssets +
      "," +
      corpID +
      "," +
      manager +
      "," +
      employee +
      ");",
    function (error, results, fields) {
      if (error) res.status(400).json(error);
      else res.status(200).json(results);
    }
  );

}
