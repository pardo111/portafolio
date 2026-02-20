import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Typing = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Transformando Ideas en Realidad Digital', 'Ricardo Pavel Presentación'],
            typeSpeed: 80,
            backSpeed: 40,
            loop: true,
            showCursor: true,
            cursorChar: '|',

            // 1. Cuando empieza a escribir una nueva cadena (reaparece)
            onStringTyped: (arrayPos, self) => {
                // Ocultamos el cursor inmediatamente después de que termina la palabra
                self.cursor.style.display = 'none';
            },

            // 2. Antes de empezar a borrar o escribir la siguiente (vuelve a aparecer)
            preStringTyped: (arrayPos, self) => {
                // Mostramos el cursor para la fase de escritura
                self.cursor.style.display = 'inline-block';
            },
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className="text-3xl md:text-6xl font-black min-h-[200px] md:min-h-[300px] text-white uppercase">
            <span ref={el} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300" />
        </div>
    );
};