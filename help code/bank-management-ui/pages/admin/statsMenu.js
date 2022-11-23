import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { url } from "../../lib/env";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function StatsMenu() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bank Management UI Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>View Stats</h2>

        <div className={styles.grid}>
          <Link href={"/admin/accountView"}>
            <a className={styles.card}>
              <h2>Account Stats &rarr;</h2>
            </a>
          </Link>

          <Link href={"/admin/bankView"}>
            <a className={styles.card}>
              <h2>Bank Stats &rarr;</h2>
            </a>
          </Link>

          <Link href={"/admin/corporationView"}>
            <a className={styles.card}>
              <h2>Corporation Stats &rarr;</h2>
            </a>
          </Link>

          <Link href={"/admin/customerView"}>
            <a className={styles.card}>
              <h2>Customer Stats &rarr;</h2>
            </a>
          </Link>

          <Link href={"/admin/employeeView"}>
            <a className={styles.card}>
              <h2>Employee Stats &rarr;</h2>
            </a>
          </Link>

          <Link href="/admin/adminMenu">
            <Button variant="contained" color="error" fullWidth>
              Cancel
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}