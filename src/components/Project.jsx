

export const Project = () => {
    return (<>
        <div className="glass-card rounded-xl overflow-hidden group neon-border-hover">
            <div className="relative aspect-video overflow-hidden">
                <img alt="Crypto Dashboard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Abstract 3D visualization of digital currency data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmk1NA5CbZP3mi5UpiZ_EZvPQ8vFLgL2y2_Z8HKzbwaMXXGA3cR_u4TXyKu9xsPuD-qvvqaVojPubF-n7BegdnPdp2Mlgz2jwfBJOAiBbOa3594cUPAZSmtnCdIzgery8B4rkTUmDk449VTagcJt07OMA9ILDbWeBuNoKV1QyHZI-5UozMJXfNw0-IHJ4HZcTEtxw0Jikk9uTWAa8Q-m4muV9Oq1USbIHwMjhfGxklfInKYD2zxQrfaxvjQip9Nb3xtFdkkZomLtEv" />
                <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-background-dark/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary border border-primary/30 uppercase tracking-widest">Web3</span>
                </div>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Crypto Dashboard</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Visualizador de métricas de blockchain con análisis predictivo basado en inteligencia artificial.</p>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">link</span>
                        <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer text-xl">code</span>
                    </div>
                    <span className="text-primary text-xs font-mono font-bold">2024_PROJECT_02</span>
                </div>
            </div>
        </div>  
    </>);
}