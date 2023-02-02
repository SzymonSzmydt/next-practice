import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Next js pre-rendering</h1>
      <Link href="/users"> users </Link>
      <Link href="/posts"> Posts </Link>
    </>
  );
}
