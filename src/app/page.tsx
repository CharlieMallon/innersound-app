import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page!</h1>
      <Link href="/contact">Contact Us</Link>
      <Link href="/embedded">Contact Us - Embedded</Link>
    </main>
  );
}
