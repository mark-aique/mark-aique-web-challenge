import typography from "@/styles/typography.module.css";
import Image from "next/image";
const locations = [
  {
    name: "Our Location",
    address: "One World Place, Lane R, BGC",
  },
  {
    name: "Our Location",
    address: "One World Place, Lane R, BGC",
  },
  {
    name: "Our Location",
    address: "One World Place, Lane R, BGC",
  },
];

const ContactDetails = () => {
  const locationComponents = [];
  for (let index = 0; index < locations.length; index++) {
    locationComponents.push(
      <div className="flex gap-[12px]" key={index}>
        <div className="p-[12px] h-[50px] w-[50px] bg-primary rounded-[8px] justify-center items-center flex">
          <Image
            src="/home-icon.png"
            alt="Home icon"
            height={22.54}
            width={22.32}
          ></Image>
        </div>
        <div>
          <p
            className={typography.textSmall}
            style={{
              fontWeight: 700,
              fontSize: "14px",
              textAlign: "start",
            }}
          >
            {locations[index].name}
          </p>
          <p className={typography.textBase}>{locations[index].address}</p>
        </div>
      </div>,
    );
  }

  return (
    <div className="flex flex-col items-start">
      <p className={typography.textBase + " font-[700] text-primary"}>
        Contact Us
      </p>
      <p className={typography.displaySmall}>Get In Touch With Us</p>
      <p
        className={typography.textSmall}
        style={{
          fontSize: "16px",
          textAlign: "start",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
        tempor
      </p>
      <div className="gap-[10px] flex flex-col mt-[12px]">
        {locationComponents}
      </div>
    </div>
  );
};

export default ContactDetails;
