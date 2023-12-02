import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: "What is a 3D website?",
        a: "A 3D website is an interactive and immersive online experience that utilizes three-dimensional graphics to engage visitors and enhance brand perception. It allows businesses to showcase products, provide virtual tours, and create interactive games, offering a more engaging and memorable experience compared to traditional websites.",
    },
    {q: "What are the benefits of using a 3D website?",
    a: "3D websites offer enhanced engagement, brand perception, and product understanding, making them a powerful tool for businesses. 3D websites captivate users' attention with their interactive elements, keeping them engaged for longer and enhancing brand recall.",
    },
    {
        q: "What is a UI/UX designer?",
        a: "A UI/UX designer is a creative professional who crafts the user interface (UI) and user experience (UX) of products. UI designers focus on the visual appearance and aesthetics, while UX designers prioritize the functionality and ease of use. Their combined efforts ensure that products are both visually appealing and user-friendly.",
    },
    {
        q: "What skills does a UI/UX designer need?",
        a: "UI/UX designers require a blend of creativity, technical expertise, and empathy. They should possess a strong understanding of visual design principles, user interface design tools, and user experience design methodologies. Additionally, they should be able to empathize with users and consider their needs throughout the design process.",
    },
    {
        q: "What is 3D modeling?",
        a: "3D modeling is the process of creating a three-dimensional representation of an object using computer software. It involves defining the object's shape, size, and texture using various modeling techniques and tools. 3D models are widely used in product design, animation, architectural visualization, and other fields.",
    },
    {
        q: "What skills does a 3D modeler need?",
        a: "3D modelers require a combination of technical proficiency and artistic flair. They should have a strong grasp of 3D modeling software, modeling principles, and various modeling techniques. Additionally, they should possess an eye for detail and a keen ability to translate real-world objects into accurate and visually appealing 3D models.",
    },
];

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs