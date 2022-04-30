import Layout from "../layout/layout";
import Link from "next/link";
import Styles from '../styles/NotFoundPage.module.css'

export default function page404() {
    return (
        <Layout>
            <div className={Styles.not_found}>
                <h1 className={"heading"}>Página no encontrada</h1>
                <Link href={"/"}><a>Volver al inicio</a></Link>
            </div>
        </Layout>
    )
}