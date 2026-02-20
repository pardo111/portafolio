import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Carousel } from "../components/Carousel";


export const Project = ({
    img,
    imgs,
    title,
    description,
    date
}) => {



    return (<>
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div className="group glass-card rounded-xl overflow-hidden group neon-border-hover transition duration-200">
                    <div className="relative aspect-video overflow-hidden">
                        <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={img} />
                        <div className="absolute top-4 right-4 flex gap-2">
                            <span className="bg-background-dark/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary border border-primary/30 uppercase tracking-widest">Web</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{title}</h4>
                        <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">{description}</p>
                    </div>
                    <div className="px-6">
                        Fecha: {date}
                    </div>
                    <h1 className="text-center transition duration-200 p-4 group-hover:scale-102 group-hover:text-cyan-400
  group-hover:[text-shadow:0_0_5px_#22d3ee,0_0_10px_#22d3ee,0_0_20px_#06b6d4]">clickea para ver detalles</h1>

                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent flex flex-col gap-4 z-1000 items-center bg-black/75 rounded-lg p-6">

                    <section className="flex flex-col lg:flex-row">
                        <section className="lg:max-w-1/2  px-4 " >
                            <Dialog.Title className="pb-2 lg:text-5xl text-2xl md:text-3xl font-bold text-white">{title}</Dialog.Title>
                            <Dialog.Description className="DialogDescription lg:text-xl md:text-md text-sm">
                                {description}
                            </Dialog.Description>
                        </section>
                        <section className="lg:max-w-1/2">

                            <Carousel
                                imgs={imgs}
                            />

                            <Dialog.Close >
                                <button className="IconButton" aria-label="Close">
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>
                        </section>
                    </section>
                    <Dialog.Close >
                        <button className="border-2 border-white rounded px-20 transition duration-200 py-2 font-bold hover:bg-white hover:text-black   text-2xl ">cerrar</button>
                    </Dialog.Close>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </>);
}