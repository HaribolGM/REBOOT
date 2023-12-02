import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import HeroImg from "@/public/images/infinity .gif"
import LayoutEffect from "@/components/LayoutEffect"





const Hero = () => (
    <section>
        <div className="custom-screen py-28">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    
                    <GradientWrapper className="mt-16 sm:mt-28" >
                        <Image
                            src={HeroImg}
                            className="shadow-lg rounded-2xl"
                            alt="Mailgo"
                        />
                    </GradientWrapper>
                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default Hero


