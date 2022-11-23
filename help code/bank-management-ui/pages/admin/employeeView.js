import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { url } from "../../lib/env";
import MyTable from "../../components/MyTable";
import { Button } from "@mui/material";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch(url + `/api/getEmployeeView`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default function employeeView({ data }) {
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
        <h1 className={styles.title}>Display Employee Stats</h1>

        <MyTable
          columns={[
            {
              field: "person_idenfifier",
              headerName: "Per ID",
              width: 150,
            },
            { field: "tax_identifier", headerName: "Tax ID", width: 150 },
            { field: "employee_name", headerName: "Name", width: 300 },
            {
              field: "date_of_birth",
              headerName: "DOB",
              width: 150,
            },
            {
              field: "joined_system",
              headerName: "Joined Date",
              width: 150,
            },
            {
              field: "street",
              headerName: "Street",
              width: 200,
            },
            {
              field: "city",
              headerName: "City",
              width: 100,
            },
            {
              field: "state",
              headerName: "State",
              width: 100,
            },
            {
              field: "zip",
              headerName: "Zip",
              width: 100,
            },
            {
              field: "number_of_banks",
              headerName: "Number of Banks",
              type: "number",
              width: 150,
            },
            {
              field: "bank_assets",
              headerName: "Bank Assets",
              type: "number",
              width: 200,
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