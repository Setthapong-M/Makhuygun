import Image from 'next/image';

export default function Gallery() {
    const images = [
        '/images/IMG_01.JPG',
        '/images/IMG_02.JPG',
        '/images/IMG_03.JPG',
        '/images/IMG_04.JPG',
        '/images/IMG_05.JPG',
        '/images/IMG_06.JPG',
        '/images/IMG_07.JPG',
        '/images/IMG_08.JPG',
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                    <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                        <Image
                            src={src}
                            alt={`Gallery image ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
