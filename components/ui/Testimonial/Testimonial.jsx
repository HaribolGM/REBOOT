import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/yash.jpeg"
import user2 from "@/public/testimonial/prath.jpeg"
import user3 from "@/public/testimonial/suraj.jpg"
import user4 from "@/public/testimonial/gaurav.jpeg"
import user5 from "@/public/testimonial/manasi.jpeg"
import user6 from "@/public/testimonial/aniket.jpeg"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "Yash Mali",
            title: "Co-Founder & CEO",
            quote: "REBOOTCAS has been a transformative force in elevating our creative capabilities. Their expertise in graphics design and 3D website development has enabled us to create visually stunning and engaging experiences for our customers, significantly enhancing our brand presence and driving business growth. "
        },
        {
            avatar: user2,
            name: "Prathamesh Gharge",
            title: "C0-Founder & Product Manager",
            quote: "REBOOTCAS has emerged as a strategic partner in our journey towards operational excellence. Their deep understanding of IT processes and their commitment to innovation have empowered us to streamline our operations, enhance efficiency, and optimize resource utilization. "
        },
        {
            avatar: user3,
            name: "Suraj Poman",
            title: "Co-Founder & CMO",
            quote: "REBOOTCAS has revolutionized our approach to human resource management. Their comprehensive solutions have streamlined our recruitment and onboarding processes, empowered us to develop and implement effective training programs, and fostered a culture of continuous learning and development within our organization. "
        },
        {
            avatar: user4,
            name: "Gaurav Mali",
            title: "Co-Founder & CTO",
            quote: "REBOOTCAS has been a lifesaver for our IT team. They have helped us troubleshoot and resolve complex technical issues, as well as implement new technologies. We are very grateful for their expertise and would highly recommend them to other businesses."
        },
        {
            avatar: user5,
            name: "Manasi",
            title: "Assistant Project Manger",
            quote: "REBOOTCAS has been a great partner for our project management needs. They have helped us plan, execute, and track our projects, as well as communicate with our stakeholders. We are very happy with their services and would highly recommend them to other businesses."

        },
        {
            avatar: user6,
            name: "Aniket Sarsar",
            title: "UI/UX Designer",
            quote: "REBOOTCAS has been a valuable asset to our design team. They have helped us create user-friendly and visually appealing interfaces for our websites and applications. We are very pleased with their work and would highly recommend them to other businesses."
        },
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                        REBOOTCAS Leaders
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-gray-800 transition-all duration-300 ease-in-out hover:border-pink-100 hover:shadow-lg"
                                    style={{
                                        backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                    }}
                                >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial

