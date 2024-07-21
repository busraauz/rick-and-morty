"use client"
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mt-10 mx-auto flex items-center justify-center">
      <Image src="/home-page.jpg" alt="Rick&Morty" width={500} height={500} />
    </div>
  );
}
