import Link from "next/link";

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <h1 className="text-xl font-bold">Gema Car Wash</h1>
    <nav>
      <Link href="/">Home</Link> | <Link href="/services">Services</Link> | <Link href="/bookings">Bookings</Link>
    </nav>
  </header>
);

export default Header;
