import SectionWrapper from "@/components/SectionWrapper";
import Feature1 from "@/public/images/kepler22b.png";
import Feature2 from "@/public/images/reboot2.0.png";
import Image from "next/image";


const VisualFeatures = () => {
  const features = [
    {
      title: "REBOOTCAS 2.0",
      desc: "Redevlop By Angular Team ",
      img: Feature2,
      link1: "https://rebootcas.com",
    },
    {
      title: "Kepler 22b",
      desc: "Concept Design of Kepler 22b Planet",
      img: Feature1,
      link2: "https://ufo.rebootcas.com",
    },
  ];
  return (
    <SectionWrapper>
      <div className="custom-screen text-gray-300">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-3">
            With reboot consultancy & services powerful features, you can easily
            create next level 3d Websites and much more services.
          </p>
        </div>
        <div className="mt-12">
          <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
            {features.map((item, idx) => (
    <li className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl p-0 m-0"
        style={{
            background: "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)",
        }}
        key={idx}
    >
        <a href={item.link2} target="_blank" rel="noopener noreferrer" className="p-0 m-0">
            <div className="p-8 cursor-pointer">
                <h3 className="text-gray-50 text-xl font-semibold">
                    {item.title}
                </h3>
                <p className="mt-3 sm:text-sm md:text-base">
                    {item.desc}
                </p>
            </div>
        </a>

        <a href={item.link1} target="_blank" rel="noopener noreferrer" className="p-0 m-0">
            <div className="p-8 cursor-pointer mr-0 mb-0">
                <Image
                    src={item.img}
                    className="object-cover w-full h-full ml-auto"
                    alt={item.title}
                />
            </div>
        </a>
    </li>
))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VisualFeatures;


