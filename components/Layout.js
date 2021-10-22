import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from "next/dist/shared/lib/head"

const Layout = ({title,children,description}) => {
    return (
        <div className="h-screen">
            <Head>
                <title>{title ? `${title}-Amazona`:"Amazona"}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <Navbar/>
            <div>
            {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
