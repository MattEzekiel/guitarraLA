import Layout from "../layout/layout";
import Image from "next/image";
import Styles from '../styles/Nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            pagina={"Nosotros"}
        >
            <main className="contenedor">
                <h1>Nosotros</h1>
                <div className={Styles.columnas}>
                    <div>
                        <Image layout={"responsive"} width={600} height={450} src={"/img/nosotros.jpg"} alt={"Imagen sobre nosotros"}/>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias architecto cumque,
                        cupiditate dicta dolor dolores ex fugit iure omnis quaerat quas quis, quos rerum sunt tempore
                        veritatis? Aliquam amet, cumque debitis deleniti distinctio doloremque, excepturi explicabo
                        harum labore laboriosam maiores molestiae possimus quibusdam quos sapiente sed similique totam
                        vel veritatis vitae? A consequuntur enim hic ipsum iste necessitatibus obcaecati porro rerum.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dicta enim error iste
                            itaque magnam maxime modi natus, ratione recusandae reprehenderit tempore ut? Aspernatur
                            aut, autem beatae debitis delectus dolor doloribus eos eveniet exercitationem libero.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}