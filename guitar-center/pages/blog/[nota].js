import Layout from "../../layout/layout";
import Image from "next/image";
import {formatearFecha} from "../../helpers";
import Styles from '../../styles/Entrada.module.css';

export default function EntradaBlog({notaCompleta}) {
    const { contenido, titulo, imagen, publishedAt } = notaCompleta.attributes;
    // imagen.data.attributes.name;

    return (
        <Layout
            pagina={titulo}
        >
            <main className={"contenedor"}>
                <h1 className={"heading"}>{titulo}</h1>
                <div className={Styles.entrada}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image layout={"responsive"} width={800} height={600} src={imagen.data.attributes.name} />
                    <p className={Styles.fecha}>{formatearFecha(publishedAt)}</p>
                </div>
                <div className={Styles.entrada}>
                    <p className={Styles.texto}>{contenido}</p>
                </div>
            </main>
        </Layout>
    )
}

/*
export async function getServerSideProps({query: {nota}}) {
    const URL = `http://localhost:1337/api/blogs/${nota}?populate=*`;
    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();
    const notaCompleta = await resultado.data;

    console.log(notaCompleta);

    return {
        props: {
            notaCompleta
        }
    }
}*/

export async function getStaticPaths() {
    const url = `${process.env.API_URL}api/blogs`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    const paths = entradas.data.map( entrada => ({
        params: {nota: entrada.attributes.url}
    }));

    console.log('paths:',paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {nota}}) {
    const URL = `${process.env.API_URL}api/blogs?populate=imagen&filters[url][$eq]=${nota}`;
    console.log(URL);
    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();
    const notaCompleta = await resultado.data;
    console.log('Nota completa:',notaCompleta)

    return {
        props: {
            notaCompleta: notaCompleta[0]
        }
    }
}