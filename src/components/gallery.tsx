import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export function Gallery({ images, columns = 3 }: { images: GalleryImage[]; columns?: 2 | 3 | 4 }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, images.length]);

  const colsClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <>
      <div className={`grid grid-cols-1 ${colsClass} gap-4 md:gap-6`}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="group relative aspect-[4/5] overflow-hidden bg-muted cursor-zoom-in rounded-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {img.caption && (
              <span className="absolute bottom-3 left-3 right-3 text-cream text-xs uppercase tracking-widest font-medium drop-shadow-lg text-left">
                {img.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {openIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setOpenIdx(null)}
            aria-label="Chiudi"
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            onClick={() =>
              setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length))
            }
            aria-label="Precedente"
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={images[openIdx].src}
            alt={images[openIdx].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            type="button"
            onClick={() => setOpenIdx((i) => (i === null ? null : (i + 1) % images.length))}
            aria-label="Successiva"
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
          {images[openIdx].caption && (
            <div className="absolute bottom-6 left-0 right-0 text-center text-cream text-sm uppercase tracking-widest">
              {images[openIdx].caption}
            </div>
          )}
        </div>
      )}
    </>
  );
}
