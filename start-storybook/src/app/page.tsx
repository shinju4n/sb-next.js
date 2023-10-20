"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/stories/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button
        backgroundColor="hsla(0, 100%, 50%, 1)"
        label="테스티이이잉"
        onClick={function noRefCheck() {}}
        primary
        size="medium"
      />
    </main>
  );
}
