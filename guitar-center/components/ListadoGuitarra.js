import Guitarra from "./Guitarra";
import Styles from '../styles/Listado.module.css';

export default function ListadoGuitarra({atributos}) {
    return (
        <div className={Styles.listado}>
            {atributos.map( guitarra => (
                <Guitarra
                    key={guitarra.id}
                    guitarra={guitarra.attributes}
                />
            ))}
        </div>
    )
}