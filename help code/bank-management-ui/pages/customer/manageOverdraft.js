import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { url } from "../../lib/env";
import { useContext, useRef } from "react";
import AppContext from "../../AppContext";
import Link from "next/link";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

export default function deposit(props) {
  const [person, setPerson] = useState("");
  const [checkingAccounts, setCheckingAccounts] = useState([]);
  const [savingsAccounts, setSavingsAccounts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [customer, setCustomer] = useState("");
  const [salary, setSalary] = useState(0);
  const [numPayments, setNumPayments] = useState(0);
  const [accumEarnings, setAccumEarnings] = useState(0);
  const { userData, setUserData } = useContext(AppContext);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const fetchData = async () => {
    const checkingAccountIDs = await fetch(
      url + `/api/customer/getAccessibleChecking`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: userData.userID,
        }),
      }
    );
    const checkingAccountIDsJSON = await checkingAccountIDs.json();
    setCheckingAccounts(checkingAccountIDsJSON);

    const savingsAccountIDs = await fetch(
      url + `/api/customer/getAccessibleSavings`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: userData.userID,
        }),
      }
    );
    const savingsAccountIDsJSON = await savingsAccountIDs.json();
    setSavingsAccounts(savingsAccountIDsJSON);
  };

  const addOverdraft = async () => {
    let account_parsed = fromAccount.split(" / ");
    let toAccount_parsed = toAccount.split(" / ");
    const rawResponse = await fetch(url + "/api/customer/startOverdraft", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requester: userData.userID,
        bankID: account_parsed[1],
        accountID: account_parsed[0],
        toBankID: toAccount_parsed[1],
        toAccountID: toAccount_parsed[0],
      }),
    });

    const response = await rawResponse.json();
    if (rawResponse.status === 400) {
      alert(response.sqlMessage);
    } else if (rawResponse.status === 200) {
      alert("Success");
    }
  };

  const removeOverdraft = async () => {
    let account_parsed = fromAccount.split(" / ");
    const rawResponse = await fetch(url + "/api/customer/stopOverdraft", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requester: userData.userID,
        bankID: account_parsed[1],
        accountID: account_parsed[0],
      }),
    });

    const response = await rawResponse.json();
    if (rawResponse.status === 400) {
      alert(response.sqlMessage);
    } else if (rawResponse.status === 200) {
      alert("Success");
    }
  };

  const handleOverdraft = async () => {
    if (!userData) {
      alert("not signed in");
    }
    if (checked) {
      addOverdraft();
    } else {
      removeOverdraft();
    }
  };

  return userData.userRole.includes("c") ? (
    <div className={styles.container}>
      <Head>
        <title>Bank Management UI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1 className={styles.title}>Manage Overdraft Policies</h1>
        </Grid>

        <Grid item xs={2} />
        <Grid item xs={8}>
          {checkingAccounts && (
            <FormControl fullWidth>
              <InputLabel>Checking Account</InputLabel>
              <Select
                label="Account"
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
              >
                {checkingAccounts.map((obj, i) => {
                  let acctID = obj["accountID"];
                  let bankID = obj["bankID"];
                  return (
                    <MenuItem key={i} value={acctID + " / " + bankID}>
                      {acctID + " / " + bankID}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={2} />
        <Grid item xs={8}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleCheck} />}
              label="Adding Overdraft Policy?"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={2} />
        <Grid item xs={8}>
          {savingsAccounts && checked && (
            <FormControl fullWidth>
              <InputLabel>Savings Account</InputLabel>
              <Select
                label="Account"
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
              >
                {savingsAccounts.map((obj, i) => {
                  let acctID = obj["accountID"];
                  let bankID = obj["bankID"];
                  return (
                    <MenuItem key={i} value={acctID + " / " + bankID}>
                      {acctID + " / " + bankID}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={2} />

        <Grid item xs={4}>
          <Link href="/customer/customerMenu">
            <Button fullWidth variant="contained" color="error">
              Cancel
            </Button>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Button variant="contained" fullWidth onClick={handleOverdraft}>
            Create
          </Button>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  ) : (
    <h1>Not Authorized</h1>
  );
}