import BaseLayout from "@/layout/baseLayout";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      img: "https://images.squarespace-cdn.com/content/v1/619c06459a9233573a0a3904/1637773521892-N5UR3OBQBLGVS5PZ5RDC/portfolio+website-3.jpg?format=1500w",
    },
    {
      title: "Project 2",
      img: "https://images.squarespace-cdn.com/content/v1/619c06459a9233573a0a3904/1642431669264-9X3MVMC6A4511Y96BRIE/chess+edit-4.jpg",
    },
    {
      title: "Project 3",
      img: "https://images.squarespace-cdn.com/content/v1/619c06459a9233573a0a3904/1675449948541-JXWCA5HAM9B6XWK9GBO9/Chatellet15-DSCF7005.jpg",
    },
    {
      title: "Project 1",
      img: "https://images.squarespace-cdn.com/content/v1/619c06459a9233573a0a3904/1675449838645-LKNHIGZ13JG7AX8Y121Z/PASTELLE++web+Yoriyas-1.jpg",
    },
    {
      title: "Project 2",
      img: "https://images.squarespace-cdn.com/content/v1/619c06459a9233573a0a3904/1642527651799-9ZI1EKDM38WN0XK8C61K/The+last+Mercedes+taxi+Yoriyas.jpg",
    },
    {
      title: "Project 3",
      img: "https://images.squarespace-cdn.com/content/v1/619c06459a9233573a0a3904/1675450099768-A4016YVMWPNWP5OWAEH6/Screen+Shot+2023-02-03+at+19.47.35.png",
    },
  ];
  return (
    <BaseLayout>
      <div
        className="flex flex-col items-center w-full mt-12"
        style={{ minHeight: "calc(100vh - 220px)" }}
      >
        <section className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="cursor-pointer">
              <div className="flex flex-col items-center w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-[300px] w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <h3 className="text-[15px] font-bold mt-4">{project.title}</h3>
            </div>
          ))}
        </section>
      </div>
    </BaseLayout>
  );
}
