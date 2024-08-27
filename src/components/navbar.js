import { useState } from "react";
import SocialMedia from "./socialMedia";
import BurgerButton from "./BurgerButton";

export default function Navbar({ active = "projects" }) {
  const siteName = "Charaf LAHIB";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const tabs = [
    {
      title: "Projects",
      href: "/",
    },
    {
      title: "Assignments",
      href: "#assignments",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full py-8">
      <section className="flex items-center space-x-4">
        <h1 className="text-3xl font-semibold mr-4">{siteName}</h1>

        <ul className="flex items-center gap-6 text-[.8rem] hidden md:flex">
          {tabs.map((tab) => (
            <li
              key={tab.title}
              className={`${
                active === tab.title.toLowerCase() &&
                "underline underline-offset-4"
              }`}
            >
              <a href={tab.href}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex items-center space-x-4">
        <div className="hidden md:block">
          <SocialMedia />
        </div>
        <div className="block md:hidden">
          <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </section>

      <section
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-400 flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between h-24 px-6">
          <h1 className="text-3xl font-semibold mr-4">{siteName}</h1>
          <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col items-center justify-center gap-2 md:hidden h-full text-[2.3rem]`}
        >
          {tabs.map((tab) => (
            <li key={tab.title}>
              <a
                href={tab.href}
                className={`${
                  active === tab.title.toLowerCase() &&
                  "underline underline-offset-4"
                }`}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center h-24">
          <SocialMedia />
        </div>
      </section>
    </nav>
  );
}
