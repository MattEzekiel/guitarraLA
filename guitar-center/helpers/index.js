export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return nuevaFecha.toLocaleTimeString('es-ES',opciones)
}

export const formatearMoneda = moneda => {
    return moneda.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    });
}