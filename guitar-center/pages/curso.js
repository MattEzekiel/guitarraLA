import Layout from "../layout/layout";
import Image from "next/image";
import Style from '../styles/Curso.module.css'
import {formatearFecha} from "../helpers";

export default function Curso({curso}) {
    const { contenido, titulo, publishedAt, imagen } = curso.attributes;

    return (
        <Layout>
            <main className={"contenedor"}>
                <h1 className={"heading"}>Curso</h1>
                <div className={Style.curso}>
                    <Image layout={"responsive"} width={300} height={150} src={imagen.data.attributes.name} alt={titulo + ' imagen'}/>
                    <h2>{titulo}</h2>
                    <p className={Style.fecha}>{formatearFecha(publishedAt)}</p>
                    <p>{contenido}</p>
                </div>
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const urlCurso = `${process.env.API_URL}api/curso?populate=imagen`;
    const respuesta = await fetch(urlCurso);
    const resultado = await respuesta.json();

    return {
        props: {
            curso: resultado.data
        }
    }
}