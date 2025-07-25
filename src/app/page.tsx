import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page!</h1>
      <div>
        <Link href="/popup">Contact Us - Popup</Link>
        <Link href="/embedded">Contact Us - Embedded</Link>
      </div>
    </main>
  );
}
