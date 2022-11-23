import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { url } from "../../lib/env";
import MyTable from "../../components/MyTable";
import Link from "next/link";
import { Button } from "@mui/material";

export async function getServerSideProps() {
  const res = await fetch(url + `/api/getAccountView`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default function accountView({ data }) {
  for (let index = 0; index < data.length; index++) {
    data[index].id = index;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Bank Management UI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Display Account Stats</h1>
        <MyTable
          columns={[
            { field: "name_of_bank", headerName: "Bank", width: 300 },
            {
              field: "account_identifier",
              headerName: "Account ID",
              width: 300,
            },
            {
              field: "account_assets",
              headerName: "Account Balance ($)",
              type: "number",
              width: 300,
            },
            {
              field: "number_of_owners",
              headerName: "Number of Owners",
              type: "number",
              width: 300,
            },
          ]}
          data={data}
        />

        <Link href="/admin/statsMenu">
          <Button
            variant="contained"
            color="error"
            fullWidth
            style={{ marginBottom: 20 }}
          >
            Back
          </Button>
        </Link>
      </main>
    </div>
  );
}
