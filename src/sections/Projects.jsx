import { Project } from "../components/Project"
import { clinica } from "../assets/clinica_java/clinica.js";


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

                    <Project
                        title="Sistema de Gestión para Clínica Psicologica"
                        description="Desarrollé un sistema de gestión para una clínica psicológica utilizando Springboot Java, MySQL y React. El sistema permite a los usuarios gestionar pacientes, citas, historiales médicos y registrar facturación de manera eficiente. Implementé funcionalidades como la programación de citas, el seguimiento de tratamientos y la generación de informes para mejorar la organización y el flujo de trabajo en la clínica."
                        imgs={clinica}
                        img={clinica[1]}
                        date="2024"
                    />
                </div>
            </div>
        </section>
    </>);
}