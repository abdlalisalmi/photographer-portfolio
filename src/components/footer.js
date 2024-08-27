import SocialMedia from "./socialMedia";

export default function Footer() {
  return (
    <footer className="w-full py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Charaf LAHIB</h1>
        <SocialMedia />
      </div>
    </footer>
  );
}
