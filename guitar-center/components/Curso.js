import Link from "next/link";
import Styles from '../styles/Curso.module.css';

export default function Curso({curso}) {
    const { contenido, titulo, imagen } = curso.attributes;

    return (
        <section className={Styles.background}>
            <div className={Styles.background_opacity}>
                <div className={`contenedor ${Styles.grid}`}>
                    <div className={Styles.contenido}>
                        <h2 className={"heading"}>{titulo}</h2>
                        <p className={Styles.texto}>{contenido}</p>
                        <Link href={"/curso"}><a className={Styles.enlace}>Más información</a></Link>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `section {
                      background-image: url("${imagen.data.attributes.name}");
                    }`
                }
            </style>
        </section>
    )
}