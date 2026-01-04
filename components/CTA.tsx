import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 text-center px-4 space-y-12">
            <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                    If you want to <span className="font-bold">learn safe, disciplined</span>, and <span className="font-bold">tactical shooting</span>
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#1F3D2B] tracking-tight">
                    {/* you're in the <span className="underline decoration-wavy decoration-[#1F3D2B]/30">right place</span> */}
                    you're in the right place
                </p>
                <p className="text-xs text-[#1F3D2B]/60 mt-4 text-red-700">
                    *** Training is provided for educational and sporting purposes only ***
                </p>
            </div>

            <Link
                href="#contact"
                className="inline-block bg-[#1F3D2B] text-[#FDFBF7] px-8 py-3 rounded-md font-bold hover:bg-[#0D3B66] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                contact us
            </Link>
        </section>
    );
}
