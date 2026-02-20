import { Typing } from "../components/Typing";

export const Hero = () => {

    return (<>
        <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden" id="home">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Disponible para nuevos proyectos
                    </div>
                    <div>
                        <Typing className="max-h-1/2"/>
                        <p className="min-h-1/2 text-lg md:text-xl text-slate-400 max-w-xl mb-10 font-light leading-relaxed">
                            Desarrollador Full Stack especializado en crear experiencias web futuristas con <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">PHP con Laravel</span >, <span className="text-white font-medium">Java con Spring Boot</span> .
                        </p>

                    </div>

                </div>
                <div className="  justify-center lg:justify-end hidden z-1  lg:flex">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 w-full h-full glass-card rounded-2xl p-4 overflow-hidden group">
                            <img alt="Code Editor Display" className="w-full h-full object-cover rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" data-alt="Futuristic glowing computer code on a dark screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI08LHOs1mbHMfb8B7rMboHU0kl5hNc1JQmPGejEqUG4RVt_4lvlRz_JM6C3KJHtmJ4L8zmxbEUwvOjrUz_KBYvSZ50crs9-Dk3_PKZVCKiVhSKwN3KWCxLAGmoqeRaTQyEYorTFr_62dURyRMbHj6yETR5wGeRNx22Ny66Ufb2vpia_5h4cgdbdq8wEpZmWJeFCdkoYOKyMr59gmDWRVQWMMQbFEC_te_bWZaunNZ0p38Q7jVxm3w2-lXUY0IjwM9qVf5p7PUIwy4" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <p className="text-primary font-mono text-sm mb-1 uppercase tracking-widest">// System Status</p>
                                <p className="text-white font-bold text-2xl uppercase tracking-tighter">Operational: 100%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}