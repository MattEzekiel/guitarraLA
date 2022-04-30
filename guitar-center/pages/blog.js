import Layout from "../layout/layout";
import Entrada from "../components/Entrada";
import Styles from '../styles/Blog.module.css';

function Blog({entradas}) {
    return (
        <Layout
            pagina={"Blog"}
        >
            <main className={"contenedor"}>
                <h1 className={"heading"}>Blog</h1>
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
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const URL = `${process.env.API_URL}api/blogs?populate=*&sort=createdAt:desc`;
    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();
    const entradas = await resultado.data;

    return {
        props: {
            entradas
        }
    }
}

export default Blog;