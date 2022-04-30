import Layout from "../layout/layout";
import ListadoGuitarra from "../components/ListadoGuitarra";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({guitarras, curso, blog}) {
    const randomNumber = parseInt(Math.random() * guitarras.length);

  return (
  <Layout
    pagina={"Inicio"}
    guitarra={guitarras[randomNumber]}
  >
      <main className={"contenedor"}>
          <h1 className={"heading"}>Nuestra colección</h1>
          <ListadoGuitarra
              atributos={guitarras}
          />
      </main>
      <Curso
        curso={curso}
      />
      <ListadoBlog
          entradas={blog}
      />
  </Layout>
  )
}

export async function getServerSideProps() {
    const urlGuitarras = `${process.env.API_URL}api/guitarras?populate=*&sort=createdAt:desc`;
    const urlCurso = `${process.env.API_URL}api/curso?populate=imagen`;
    const urlBlog = `${process.env.API_URL}api/blogs?populate=*&pagination[limit]=3&sort=createdAt:desc`;

    const [resGuitarras, resCurso, resBlog] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlCurso),
        fetch(urlBlog)
    ])

    const [guitarras, curso, blog] = await Promise.all([
        resGuitarras.json(),
        resCurso.json(),
        resBlog.json()
    ])

    return {
        props: {
            guitarras: guitarras.data,
            curso: curso.data,
            blog: blog.data
        }
    }
}