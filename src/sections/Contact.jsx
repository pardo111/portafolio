

export const Contact = () => {

    return (<>
        <section className="py-24 px-6 relative" id="contacto">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden p-8 md:p-12 border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4">// Get In Touch</h2>
                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Iniciemos algo <span className="text-primary">grande</span></h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">¿Tienes un proyecto en mente o simplemente quieres saludar? Mi bandeja de entrada siempre está abierta.</p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <span>hello@devmatrix.io</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <span data-location="Remote / Digital Space">Remoto / Nómada Digital</span>
                            </div>
                        </div>
                    </div>
                    <form action="#" className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nombre</label>
                            <input className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light" placeholder="Tu nombre" type="text" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                            <input className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light" placeholder="tu@email.com" type="email" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Mensaje</label>
                            <textarea className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light" placeholder="Cuéntame sobre tu proyecto..." rows="4"></textarea>
                        </div>
                        <button className="w-full bg-primary text-background-dark font-bold py-4 rounded-lg uppercase tracking-wider hover:shadow-[0_0_20px_rgba(13,204,242,0.4)] transition-all">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </>);
}