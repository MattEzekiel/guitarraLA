import { formatearFecha } from "../helpers";
import Link from "next/link";
import Image from "next/image";
import Styles from '../styles/Entrada.module.css';

export default function Entrada({entrada , id}) {
    const { titulo, resumen, imagen, publishedAt, url} = entrada;

    return (
        <article className={Styles.article}>
            <Image layout={"responsive"} width={800} height={600} src={imagen.data.attributes.name} alt={`Imagen de portada ${titulo}`} priority={"true"} className={Styles.imagen}/>
            <div className={Styles.contenido}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <h2>{titulo}</h2>
                <p className={Styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={Styles.resumen}>{resumen.substring(0,150)}[...]</p>
                <Link href={`/blog/${url}`}><a className={Styles.enlace}>Ver nota</a></Link>
            </div>
        </article>
    )
}