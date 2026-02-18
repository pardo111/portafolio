

export const Skill = () => {
    return (<>
        <div className="glass-card p-6 rounded-xl flex flex-col items-center gap-4 group hover:bg-primary/10 transition-colors cursor-default border-white/5">
            <div className="size-16 rounded-lg bg-background-dark flex items-center justify-center text-primary group-hover:shadow-[0_0_15px_rgba(13,204,242,0.4)] transition-shadow">
                <span className="material-symbols-outlined text-4xl">database</span>
            </div>
            <span className="font-bold text-white tracking-widest text-xs uppercase">Backend</span>
        </div>
    </>);
}