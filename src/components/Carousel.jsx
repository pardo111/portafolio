import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useRef } from "react"

export function Carousel({ imgs }) {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplay.current]
  )

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    /* 1. 'relative' define el área de juego para los botones.
       2. 'max-w-fit' y 'mx-auto' hacen que el contenedor no sea más ancho que la imagen.
    */
    <div className="relative group max-w-4xl mx-auto">
      
      {/* Viewport del Carrusel */}
      <div className="overflow-hidden rounded-xl shadow-lg" ref={emblaRef}>
        <div className="flex">
          {imgs.map((img, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center bg-zinc-900"
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                // 'block' evita espacios extra debajo de la imagen
                className="w-full max-h-[60vh] object-contain block" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTÓN IZQUIERDO: Centrado verticalmente sobre la imagen */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                   p-3 rounded-full bg-black/40 text-white backdrop-blur-md
                   hover:bg-black/70 transition-all active:scale-95"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* BOTÓN DERECHO: Centrado verticalmente sobre la imagen */}
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                   p-3 rounded-full bg-black/40 text-white backdrop-blur-md
                   hover:bg-black/70 transition-all active:scale-95"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  )
}