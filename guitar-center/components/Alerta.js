import Style from '../styles/Alerta.module.css';

export default function Alerta({mensaje,tipo}) {
    return (
        <div className={`${Style.alerta} ${tipo === 'success' ? Style.success : Style.error}`}>
            <p>{mensaje}</p>
        </div>
    )
}