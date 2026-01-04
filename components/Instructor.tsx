import Image from 'next/image';

export default function Instructor() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto bg-[#EDE7DD] rounded-xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center shadow-sm">
                <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shrink-0 shadow-md">
                    <Image
                        src="/images/hero_profile.JPG"
                        alt="Nat Nakkaew - Instructor"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex-1 space-y-6">
                    <div>
                        <p className="text-sm font-medium text-[#1F3D2B]/80">I&apos;m Nat Nakkaew</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1F3D2B] mt-1">
                            aka <span className="text-[#0D3B66]">“Jarn Tum”</span>
                        </h3>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-bold text-[#0D3B66]">Instructor Credentials:</h4>
                        <ul className="space-y-2 text-sm text-[#1F3D2B]">
                            <li className="flex items-start gap-2">
                                <span className="text-[#1F3D2B]/60">→</span>
                                <span>IDPA <strong className="decoration-[#1F3D2B]/30">Certified</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#1F3D2B]/60">→</span>
                                <span>Competitive shooting experience.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#1F3D2B]/60">→</span>
                                <span>Firearms <strong className="decoration-[#1F3D2B]/30">Safety</strong> & skills <strong className="decoration-[#1F3D2B]/30">training</strong>.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-sm border-l-2 border-[#0D3B66] pl-4 py-1 mt-4">
                        <p className="font-medium">Want a taste of what I teach?</p>
                        <p className="text-[#1F3D2B]/80">Watch our sample lessons on</p>
                        <span className="font-bold text-red-700 inline-flex items-center">YouTube Channel: <a href="https://www.youtube.com/@makhuyguns8533" className="ml-2 inline-block bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors shadow-sm no-underline" target="_blank">Ma Khuy Gun</a></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
