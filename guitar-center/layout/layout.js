import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children, pagina, guitarra }) {
    return (
        <>
            <Head>
                <title>GuitarCenter - {pagina}</title>
                <meta name="description" content="Sitio Web de venta de guitarras"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"/>
            </Head>
            <Header
                guitarra={guitarra?.attributes}
            />
            {children}
            <Footer/>
        </>
    )
}