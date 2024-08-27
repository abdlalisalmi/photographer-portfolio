import { Facebook, Instagram, Twitter } from "./icons";

export default function SocialMedia() {
  const socialMedia = {
    instagram: "https://www.instagram.com/charaf.lahib/",
    facebook: "https://www.facebook.com/charaf.lahib",
    twitter: "https://twitter.com/charaf_lahib",
    email: "mailto:charaf.lahib@gmail.com",
  };

  return (
    <section className="flex items-center space-x-4">
      <ul className="flex items-center gap-4">
        <li>
          <a
            href={socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram w="22" h="22" />
          </a>
        </li>
        <li>
          <a
            href={socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook w="18" h="18" />
          </a>
        </li>
        <li>
          <a
            href={socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a href={socialMedia.email} target="_blank" rel="noopener noreferrer">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}
