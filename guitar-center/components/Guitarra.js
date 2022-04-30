import {formatearMoneda} from "../helpers";
import Image from "next/image";
import Link from "next/link";
import Styles from '../styles/Guitarra.module.css'

export default function Guitarra({guitarra}) {
    const { nombre, descripcion, precio, imagen, url } = guitarra;
    return (
        <article className={Styles.guitarra}>
            <Image layout={"responsive"} width={180} height={350} src={imagen.data.attributes.name} alt={nombre} />
            <div className={Styles.contenido}>
                <h2>{nombre}</h2>
                <p className={Styles.resumen}>{descripcion}</p>
                <p className={Styles.precio}>{formatearMoneda(precio)}</p>
                <Link href={`/guitarra/${url}`}><a className={Styles.enlace}>Ver producto</a></Link>
            </div>
        </article>
    )
}