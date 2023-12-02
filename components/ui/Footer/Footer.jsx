



import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="custom-screen">
                <div className="mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex">
                    <p className="text-gray-400 text-center">© 2023 REBOOTCAS Inc. All rights reserved.</p>
                    <div className="flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
                    <a href="https://www.instagram.com/rebootcas?igshid=OGQ5ZDc2ODk2ZA" target="_blank" rel="noreferrer" aria-label="Instagram">
    <FaInstagram className="w-6 h-6 hover:text-gray-200 duration-150" />
</a>
<a href="https://api.whatsapp.com/message/ZRK3W3A6FR7XL1?autoload=1&app_absent=0" target="_blank" rel="noreferrer" aria-label="WhatsApp">
    <FaWhatsapp className="w-6 h-6 hover:text-gray-200 duration-150" />
</a>
<a href="https://www.linkedin.com/company/reboot-consultancy-services/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
    <FaLinkedin className="w-6 h-6 hover:text-gray-200 duration-150" />
</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer