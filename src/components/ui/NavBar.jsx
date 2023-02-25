import { AiFillPhone } from "react-icons/ai/index.js";

function Nav() {
  return (
    <nav className=" bg-green-600 py-4 ">
      <div className="flex h-full w-full flex-col items-center space-y-2">
        <div className="flex font-merriweather text-xl text-white">
          <a href="/">The Hugo Theme</a>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/sample">About</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <div className="flex">
          <AiFillPhone className="mt-1 mr-1 text-white" />
          <a className="text-white" href="tel:9514733954">
            (951)-473-3954
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
