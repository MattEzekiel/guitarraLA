import Link from "next/link";
import Style from '../styles/Header.module.css';
import Image from "next/image";
import {formatearMoneda} from "../helpers";
import {useRouter} from "next/router";

export default function Header({guitarra}) {
    const router = useRouter();
    return (
        <header className={Style.header}>
            <div className={"contenedor"}>
                <div className={Style.barra}>
                    {/* eslint-disable-next-line @next/next/link-passhref */}
                    <Link href={"/"}>
                        <a><Image width={400} height={100} src={"/img/logo.svg"} alt={"logo de la marca"} className={Style.cursor} /></a>
                    </Link>
                    <nav className={Style.navegation}>
                        <Link href={"/"}>Inicio</Link>
                        <Link href={"/nosotros"}>Nosotros</Link>
                        <Link href={"/blog"}>Blog</Link>
                        <Link href={"/tienda"}>Tienda</Link>
                        <Link href={"/carrito"}><a><Image layout={"fixed"} width={30} height={25} src={"/img/carrito.png"} alt={"Carrito"} /></a></Link>
                    </nav>
                </div>
                { guitarra && (
                    <div className={Style.modelo}>
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p className={Style.resumen}>{guitarra.descripcion}</p>
                        <p className={Style.precio}>{formatearMoneda(guitarra.precio)}</p>
                        <Link href={`/guitarra/${guitarra.url}`}><a className={Style.enlace}>Ver producto</a></Link>
                    </div>
                )}
            </div>
            { router.pathname === '/' && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className={Style.guiarra} src={"/img/header_guitarra.png"} alt="Guitarra Header"/>
            )}
        </header>
    )
}