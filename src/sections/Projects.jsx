import { Project } from "../components/Project"


export const Projects = () => {

    return (<>

        <section className="py-24 px-6" id="proyectos">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:items-start justify-between gap-6 mb-16">
                    <div>
                        <h2 className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4">// Portafolio</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Proyectos Destacados</h3>
                    </div>
                    <p className="text-slate-400 max-w-sm">Una selección de mis trabajos más recientes construidos.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Project></Project>
                </div>
            </div>
        </section>
    </>);
}