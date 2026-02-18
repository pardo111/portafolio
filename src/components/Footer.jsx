

export const Footer = () => {
    return (<>
        <footer className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                
                <div className="flex gap-6">
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#">Github</a>
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    </>);
}