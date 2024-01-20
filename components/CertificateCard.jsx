import { FaCertificate } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const CertificateCard = ({ title, des, listItem, link, logoSrc }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-[inherit] hover:text-[#1ABC9C] no-underline"
    >
      <div className="w-full h-[365px] md:h-[350px] lg:h-[385px] bg-gradient-to-b from-[#112240] to-[#112240] rounded-lg p-6 flex flex-col justify-between gap-5 hover:-translate-y-2 transition-transform duration-300 group relative">
        <div className="flex justify-between items-center">
          {/* Add logo here */}
          {logoSrc && (
            <img
              src={logoSrc}
              alt="Certificate Logo"
              className="rounded-full w-12 h-12 object-cover relative mb-5 z-10 top-4 left-4"
            />
          )}
          {/* <FaCertificate className="text-4xl text-white relative z-10" /> */}
          <RxOpenInNewWindow className="text-2xl group-hover:text-white relative z-10" />
        </div>
        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide group-hover:text-white">
            {title}
          </h2>
          <div className="overflow-auto max-h-[100px] scrollbar-hide">
            <p className="text-sm md:text-base mt-3 text-white">{des}</p>
          </div>
        </div>
        <ul className="text-xs md:text-sm text-white flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default CertificateCard;
