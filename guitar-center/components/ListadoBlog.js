import Styles from "../styles/Blog.module.css";
import Entrada from "./Entrada";

export default function ListadoBlog({entradas}) {
    return (
        <section className={"contenedor"}>
            <h2 className={"heading"}>Blog</h2>
            <div className={Styles.blog}>
                {
                    entradas.map(entrada => (
                        <Entrada
                            key={entrada.id}
                            entrada={entrada.attributes}
                            id={entrada.id}
                        />
                    ))
                }
            </div>
        </section>
    )
}