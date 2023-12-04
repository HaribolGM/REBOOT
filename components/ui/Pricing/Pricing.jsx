import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";

const Pricing = () => {

    const plans = [
        {
            name: "UI/UX Design",
            desc: "Craft stunning user interfaces and create an unforgettable experience for your users.",
            price: 0,
            isMostPop: false,
            features: [
                "Access to a wide range of UI/UX design tools and resources",
                "Personalized guidance from experienced UI/UX designers",
                "Create interactive prototypes and test your designs with real users",
                "Learn the latest UI/UX trends and best practices",
            ],
        },
        {
            name: "3D Websites",
            desc: "Design and develop captivating 3D websites that engage and convert.",
            price: 12,
            isMostPop: true,
            features: [
                "Create immersive and interactive 3D experiences",
                "Utilize cutting-edge 3D modeling and animation tools",
                "Optimize your 3D websites for performance and accessibility",
                "Receive expert support from 3D website development specialists",
            ],
        },
        {
            name: "3D Modelling",
            desc: "Bring your ideas to life with precise and detailed 3D models.",
            price: 32,
            isMostPop: false,
            features: [
                "Master the art of 3D modeling with comprehensive training",
                "Create high-quality 3D models for various applications",
                "Learn advanced techniques for 3D modeling and sculpting",
                "Receive personalized feedback and guidance from 3D modeling experts",
            ],
        },
    ];
    

    const mostPopPricingBg = "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #1F2937 0%, rgba(31, 41, 55, 0) 100%)"

    return (
        <SectionWrapper id="pricing" className='custom-screen'>
            <div className='relative max-w-xl mx-auto text-center'>
                <h2 className='text-gray-50 text-3xl font-semibold sm:text-4xl'>
                  
                    Find a plan to <span className="primary-gradient">power your business</span>


                </h2>
            </div>
            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 ${item.isMostPop ? "border border-purple-500" : ""}`}
                                style={{
                                    backgroundImage: item.isMostPop ? mostPopPricingBg : ""
                                }}
                            >
                                <div className="p-8 space-y-4 border-b border-gray-800 text-center">
                                    <span className='text-purple-600 font-medium'>
                                        {item.name}
                                    </span>
                                  
                                    <p className="text-gray-400">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="p-8">
                                    <ul className='space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5 text-gray-300'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-indigo-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clipRule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="pt-8">
                                        <Button className={`w-full rounded-full text-white ring-offset-2 focus:ring ${item.isMostPop ? "bg-purple-600 hover:bg-purple-500 focus:bg-purple-700 ring-purple-600" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"}`}>
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </LayoutEffect>
        </SectionWrapper>
    );
};

export default Pricing