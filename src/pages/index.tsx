import Chat from '@/pages/chat'
import styles from './styles.module.scss'
import UploadPDF from "@/components/UploadPDF";
import ThemeChanger from "@/components/ThemeChanger";
import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <UploadPDF/>
        <ThemeChanger/>
      </header>
      <Chat/>
    </>
  );
}
