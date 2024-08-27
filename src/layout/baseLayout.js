import Navbar from "@/components/navbar";

export default function BaseLayout({ children }) {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full px-6 lg:px-12">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
