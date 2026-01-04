import Link from 'next/link';

export default function Certificate() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1F3D2B] text-center mb-12 uppercase tracking-tight">View Certificates</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex justify-center">
                    <Link
                        href="https://drive.google.com/file/d/1BR86Xfjm1alKhEawb16wPciqzj1_rLZj/view" target="_blank"
                        className="inline-block bg-[#5A1E2D] text-[#FDFBF7] px-8 py-3 rounded-md font-bold hover:bg-[#0D3B66] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        IDPA Card
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="https://drive.google.com/file/d/1T3oDW1qoLi_17g5nYR8cdSuP3HSke9pb/view" target="_blank"
                        className="inline-block bg-[#5A1E2D] text-[#FDFBF7] px-8 py-3 rounded-md font-bold hover:bg-[#0D3B66] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        IDPA Certificate
                    </Link>
                </div>
            </div>
        </section>
    );
}
