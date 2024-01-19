import Image from "next/image";
import { Inter } from "next/font/google";
import BoxWidth from "./components/BoxWidth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BoxWidth />
    </>
  );
}
