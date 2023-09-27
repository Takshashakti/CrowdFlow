import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  // const [signedIn, setSignedIn] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("authToken") && router.pathname == "/") void router.push("/signin");
    else setLoaded(true);
  }, [router]);

  if (!loaded) return <></>;

  return (
    <>
      <Head>
        <title>CrowdFlow</title>
        <meta name="description" content="an app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      home and prolly signed in
    </>
  );
}
