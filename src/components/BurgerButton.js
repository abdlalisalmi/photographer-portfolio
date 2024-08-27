export default function BurgerButton({ isOpen, toggleMenu }) {
  return (
    <button
      className="flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none lg:hidden"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span
        className={`w-8 h-[2px] bg-black transition-transform duration-300 transform ${
          isOpen ? "rotate-45" : ""
        }`}
      ></span>
      <span
        className={`w-8 h-[2px] bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-8 h-[2px] bg-black transition-transform duration-300 transform ${
          isOpen ? "-rotate-45" : ""
        }`}
      ></span>
    </button>
  );
}
