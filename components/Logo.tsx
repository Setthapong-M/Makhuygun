"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TargetIcon } from './TargetIcon';

interface LogoProps {
    className?: string;
    iconClassName?: string;
    titleClassName?: string;
}

export const Logo = ({ className, iconClassName = "w-6 h-6", titleClassName }: LogoProps) => {
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Link
            href="/"
            onClick={handleClick}
            className="block hover:opacity-90 transition-opacity"
        >
            <div className={`border border-[#1F3D2B] rounded-sm flex items-center gap-2 ${className}`}>
                <TargetIcon className={`text-[#1F3D2B] ${iconClassName}`} />
                <div>
                    <span className={`font-bold tracking-tighter text-[#1F3D2B] block leading-none ${titleClassName}`}>
                        MÖMENTUM
                    </span>
                    <span className="block text-[0.6rem] tracking-widest uppercase text-[#1F3D2B] leading-none">
                        Shooting Training Club
                    </span>
                </div>
            </div>
        </Link>
    );
};
