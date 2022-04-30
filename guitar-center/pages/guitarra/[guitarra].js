import Layout from "../../layout/layout";
import Image from "next/image";
import {formatearMoneda} from "../../helpers";
import Styles from '../../styles/Guitarra.module.css';
import {useState} from "react";
import Alerta from "../../components/Alerta";

export default function EntradaGuitarra({guitarraCompleta, agregarCarrito}) {
    const { descripcion, nombre, imagen, precio } = guitarraCompleta.attributes;
    const [cantidad,setCantidad] = useState(0);
    const [alerta,setAlerta] = useState(false);
    const [tipo,setTipo] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();

      if (cantidad < 0) {
          setAlerta(true);
          setTipo('error');
      }

      const guitarraSeleccionada = {
          id: guitarraCompleta.id,
          imagen: imagen.data.attributes.name,
          nombre,
          precio,
          cantidad
      }

      agregarCarrito(guitarraSeleccionada);
      setAlerta(true);
      setTipo("success");

      setTimeout(() => {
          setAlerta(false);
      },3000);
    }

    return (
        <Layout
            pagina={nombre}
        >
            { alerta && (
                <Alerta
                    mensaje={"La guitarra ha sido agregada al carrito"}
                    tipo={tipo}
                />
            )}
            <main className={Styles.guitarra}>
                <Image layout={"responsive"} width={180} height={350} src={imagen.data.attributes.name} alt={nombre} />
                <div className={Styles.contenido}>
                    <h1>{nombre}</h1>
                    <p className={Styles.resumen}>{descripcion}</p>
                    <p className={Styles.precio}>{formatearMoneda(precio)}</p>
                    <form
                        className={Styles.formulario}
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="cantidad">Cantidad</label>
                        <select
                            name="cantidad"
                            id="cantidad"
                            value={cantidad}
                            onChange={ e => setCantidad(parseInt(e.target.value))}
                        >
                            <option value="0" disabled>-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <button
                            type={"submit"}
                        >
                            Agregar al carrito
                        </button>
                    </form>
                </div>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({query: {guitarra}}) {
    const URL = `${process.env.API_URL}api/guitarras?populate=imagen&filters[url][$eq]=${guitarra}`;
    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();
    const guitarraCompleta = await resultado.data;

    return {
        props: {
            guitarraCompleta: guitarraCompleta[0]
        }
    }
}

/*
export async function getStaticPaths() {
    const url = `${process.env.API_URL}api/guitarras`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    const paths = entradas.data.map( entrada => ({
        params: {guitarra: entrada.attributes.url}
    }));

    console.log('paths:',paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {guitarra}}) {
    const URL = `${process.env.API_URL}api/guitarras?populate=imagen&filters[url][$eq]=${guitarra}`;
    console.log(URL);
    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();
    const guitarraCompleta = await resultado.data;
    console.log('Guitarra completa:',guitarraCompleta)

    return {
        props: {
            guitarraCompleta: guitarraCompleta[0]
        }
    }
}*/
