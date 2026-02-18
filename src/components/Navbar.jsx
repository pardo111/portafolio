import { faFile, faHouse } from "@fortawesome/free-regular-svg-icons";
import { faAt, faBolt, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <div className=" flex items-center justify-center gap-11 ">
                    <a className="hover:scale-105 transition-transform duration-300 hover:text-teal-300 hover:shadow-2xl hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.9)]  hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.8)] text-sm gap-3 flex font-medium hover:text-primary transition-colors uppercase tracking-wider" href="#home">
                        <FontAwesomeIcon className="text-lg" icon={faHouse} />
                        <p className="md:block hidden">Inicio</p>
                    </a>
                    <a className="hover:scale-105 transition-transform duration-300 hover:text-teal-300 hover:shadow-2xl  hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.9)]  hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.8)] text-sm gap-3 flex font-medium hover:text-primary transition-colors uppercase tracking-wider" href="#proyectos">
                        <FontAwesomeIcon className="text-lg" icon={faDiagramProject} />
                        <p className="md:block hidden">Proyectos</p>
                    </a>
                    <a className="hover:scale-105 transition-transform duration-300 hover:text-teal-300 hover:shadow-2xl hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.9)]  hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.8)] text-sm gap-3 flex font-medium hover:text-primary transition-colors uppercase tracking-wider" href="#habilidades">
                        <FontAwesomeIcon className="text-lg" icon={faBolt} />
                        <p className="md:block hidden">Habilidades</p></a>
                    <a className="hover:scale-105 transition-transform duration-300 hover:text-teal-300 hover:shadow-2xl hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.9)]  hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.8)] text-sm gap-3 flex font-medium hover:text-primary transition-colors uppercase tracking-wider" href="#contacto"><FontAwesomeIcon className="text-lg" icon={faAt} /><p className="md:block hidden">Contacto</p></a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="hover:bg-white hover:text-black hover:scale-105 hover:font-bold flex bg-primary/10 border items-center border-primary/50 text-primary hover:bg-primary hover:text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 uppercase tracking-tighter">
                        <FontAwesomeIcon className="text-lg" icon={faFile} />
                        <p className="text-xs md:text-lg hidden md:block">
                            Descargar CV
                        </p>
                    </button>

                </div>
            </div>
        </nav>
    )
}
