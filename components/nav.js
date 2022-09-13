import Link from "next/link";
import { useEffect } from "react";
import { BsCircleHalf } from "react-icons/bs";
import { useTheme } from "next-themes";

const links = [
  // { label: "", href: "/" },
  // {
  //   label: "",
  //   href:
  //     "",
  // },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    console.log("Sign up for Hydra Hacks!");
  });
  return (
    <nav className="font-openSans text-white text-shadow-md font-semibold">
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
        <li></li>
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-4`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`px-4 py-2 rounded hover:bg-black hover:bg-opacity-10`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
