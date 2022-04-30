import Layout from "../layout/layout";
import Image from "next/image";
import Style from '../styles/Carrito.module.css';
import {useEffect, useState} from "react";
import {formatearMoneda} from "../helpers";

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total,producto) => total + (producto.cantidad * producto.precio),0);

        setTotal(calculoTotal);
    },[carrito]);

    return (
        <Layout
            pagina={"Carrito de compras"}
        >
            <main className={"contenedor"}>
                <h1 className={"heading"}>Desde Carrito</h1>
                <div className={Style.contenido}>
                    <div className={Style.carrito}>
                        <h2>Productos</h2>
                        {carrito.length === 0 ? 'Carrito Vacío' : (
                            carrito.map(producto => (
                                <div key={producto.id} className={Style.producto}>
                                    <div>
                                        <Image layout={"responsive"} width={250} height={500} src={producto.imagen} alt={producto.nombre} />
                                    </div>
                                    <div>
                                        <h3 className={Style.nombre}>{producto.nombre}</h3>
                                        <div className={Style.cantidad}>
                                            <p>Cantidad:</p>
                                            <select
                                                name="cantidad"
                                                id="cantidad"
                                                value={producto.cantidad}
                                                className={Style.select}
                                                onChange={e => actualizarCantidad({
                                                    cantidad: e.target.value,
                                                    id: producto.id
                                                })}
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
                                        </div>
                                        <p className={Style.precio}>Precio: <span>{formatearMoneda(producto.precio)}</span></p>
                                        <p className={Style.subtotal}>Subtotal: <span>{formatearMoneda(producto.precio * producto.cantidad)}</span></p>
                                    </div>
                                    <button
                                        type={"button"}
                                        className={Style.eliminar}
                                        onClick={() => eliminarProducto(producto.id)}
                                    >x
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    <div className={Style.resumen}>
                        <h2>Resumen del pedido</h2>
                        {total > 0 ? (
                            <div>
                                <p>Total a pagar: {formatearMoneda(total)}</p>
                            </div>
                        ) : <p>No hay productos en el carrito</p>}
                    </div>
                </div>
            </main>
        </Layout>
    )
}