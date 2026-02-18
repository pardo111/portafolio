import { Skill } from "../components/Skill"

export const Skills = () => {
    return (<>
        <section className="py-24 px-6 bg-white/5" id="habilidades">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4">// Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Stack Tecnológico</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    <Skill></Skill>
                </div>
            </div>
        </section>
    </>);
}