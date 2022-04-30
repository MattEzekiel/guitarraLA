import Link from "next/link";
import Styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={"contenedor"}>
                <div className={Styles.barra}>
                    <nav className={Styles.navegation}>
                        <Link href={"/"}>Inicio</Link>
                        <Link href={"/nosotros"}>Nosotros</Link>
                        <Link href={"/blog"}>Blog</Link>
                        <Link href={"/tienda"}>Tienda</Link>
                    </nav>
                    <p>Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}