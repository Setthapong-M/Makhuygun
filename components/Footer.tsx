import { Logo } from './Logo';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-[#1F3D2B]/10 mt-16 bg-[#EDE7DD]/30">
            <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-12">

                {/* Logo/Brand */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Logo
                        className="p-2 bg-[#FDFBF7] gap-3"
                        iconClassName="w-8 h-8"
                        titleClassName="text-lg"
                    />
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-right space-y-2 text-sm md:text-base">
                    <div>
                        <span className="font-bold">Business email:</span> <a href="mailto:Makhuygun@gmail.com" className="hover:text-[#0D3B66] underline decoration-dotted">Makhuygun@gmail.com</a>
                    </div>

                    <div className="mt-4">
                        <span className="font-bold block">Address:</span>
                        <span className="text-[#1F3D2B]/80">333 Shooting Range Rangsit<br />Thanyaburi Rd, Pathum Thani 12120</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
