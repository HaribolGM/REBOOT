import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/reboot.png"
        alt="reboot logo"
        {...props}
        width={160}
        height={80}
        priority
    />
)
export default Brand