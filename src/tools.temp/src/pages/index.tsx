import Head from "next/head";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sitecore Search - Next.js Sample</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello Sitecore Search</h1>
        <Button>Click me</Button>
      </main>
    </>
  );
}