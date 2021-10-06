import Link from "next/link";
import Image from "next/image";
import HomeLogo from "../public/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="max-w-full bg-gray-300 h-16 py-1">
        <div className="relative">
          <span className="px-4 cursor-pointer">
            <Link href="/" passHref>
              <Image
                src={HomeLogo}
                alt="Home Logo"
                height="50px"
                width="100px"
              />
            </Link>
          </span>
        </div>
        <div className="absolute top-2 right-4 flex justify-end space-x-7">
          <Link href="/">
            <a className="button bg-white h-10 hover:text-primary">Home</a>
          </Link>
          <Link href="/register">
            <a className="button bg-white h-10 hover:text-primary">
              Register Now
            </a>
          </Link>
          <Link href="/components">
            <a className="button bg-white h-10 hover:text-primary">
              Testing Components
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
