import Layout from "../layout/layout";
import ListadoGuitarra from "../components/ListadoGuitarra";

function Tienda({guitarras}) {
    return (
        <Layout
            pagina={"Tienda"}
        >
            <main className={"contenedor"}>
                <h1 className={"heading"}>Nuestra colección</h1>
                    <ListadoGuitarra
                        atributos={guitarras}
                    />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const URL = `${process.env.API_URL}api/guitarras?populate=*&sort=createdAt:desc`;
    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();

    return {
        props: {
            guitarras: resultado.data
        }
    }
}

export default Tienda;