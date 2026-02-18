import { faLaravel, faNodeJs, faPostgresql } from "@fortawesome/free-brands-svg-icons";
import { Skill } from "../components/Skill"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import springboot from "../assets/icons/spring.svg"
import mariadb from "../assets/icons/mariadb.png"
import mysql from "../assets/icons/mysql.svg"
import react from "../assets/icons/react.svg"
import tailwind from "../assets/icons/tailwind CSS.svg"
import jquery from "../assets/icons/jQuery.svg"

export const Skills = () => {

    const backend = [
        {
            icon: <img src={springboot} className="size-16" alt="Spring Boot" />,
            skill: "Spring Boot"
        },
        {
            icon: <FontAwesomeIcon icon={faLaravel} size="5x" />,
            skill: "Laravel"
        },
        {
            icon: <FontAwesomeIcon icon={faNodeJs} size="5x" />
            , skill: "Node.js \n Express"
        }

    ];
    const database = [
        {
            icon: <FontAwesomeIcon size="4x" icon={faPostgresql} />,
            skill: "PostgreSQL",
        },
        {
            icon: <img src={mariadb} alt="mariadb" className="size-24 " />,
            skill: "MariaDB",

        }
        , {
            icon: <img src={mysql} alt="mysql" className="size-24 " />,
            skill: "MySQL"
        }
    ];
    const front = [
        {
            icon: <img src={react} alt="React" className="size-24" />,
            skill: "React"
        },
        {
            icon: <img src={tailwind} alt="Tailwind CSS" className="size-24" />,
            skill: "Tailwind CSS"
        },
        {
            icon: <img src={jquery} alt="jQuery" className="size-24" />,
            skill: "jQuery"
        }
    ]

    return (<>
        <section className="py-24  bg-white/5" id="habilidades">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4">// tecnologias</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Stack Tecnológico</h3>
                </div>
                <div className="flex flex-col gap-10 ">
                    <div className="col-span-6 flex flex-col gap-4 text-center">
                        <h1 className="text-4xl">   Backend & APIs  </h1>

                        Desarrollo de APIs REST con Laravel y Spring Boot, Autenticación con JWT,Diseño de arquitectura por capas, Manejo de validaciones y seguridad, Uso de middlewares, Integración con bases de datos relacionales, Manejo de colas (laravel) / procesos asíncronos
                    </div>
                    <div className=" flex flex-wrap items-center justify-center gap-10">

                        {

                            backend.map((skill, index) => (
                                <Skill className="flex-none" key={index} {...skill} />
                            ))

                        }

                    </div>
                    <div className="col-span-6 flex flex-col gap-4 text-center">
                        <h1 className="text-4xl">  Bases de datos relacionales  </h1>

                        Procedimientos almacenados,

                        Triggers,

                        Normalización,

                        Diseño relacional,
                    </div>
                                        <div className=" flex flex-wrap items-center justify-center gap-10">

                    {
                        database.map((skill, index) => (
                            <Skill key={index} {...skill} />
                        ))
                    }
                    </div>

                    <div className="col-span-6 flex flex-col gap-4 text-center">
                        <h1 className="text-4xl">    Frontend  </h1>

                        Desarrollo de interfaces con React, Uso de Tailwind CSS para diseño responsivo, Manejo de estados y props en React, Integración con APIs REST, Uso de jQuery para manipulación del DOM y eventos
                    </div>
                                        <div className=" flex flex-wrap items-center justify-center gap-10">

                    {
                        front.map((skill, index) => (
                            <Skill key={index} {...skill} />
                        ))

                    }
                    </div>
                </div>
            </div>
        </section>
    </>);
}