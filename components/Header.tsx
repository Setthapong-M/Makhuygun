import Link from 'next/link';
import { Logo } from './Logo';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#1F3D2B]/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* <div className="flex items-center gap-2">
                    <Logo className="p-1 px-2" />
                </div> */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Logo
                        className="p-2 bg-[#FDFBF7] gap-3"
                        iconClassName="w-8 h-8"
                        titleClassName="text-lg"
                    />
                </div>

                <nav className="flex items-center gap-8 text-sm font-medium lowercase tracking-wide">
                    <Link href="#about" className="hover:text-[#0D3B66] transition-colors">
                        about
                    </Link>
                    <Link href="#contact" className="hover:text-[#0D3B66] transition-colors">
                        contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
