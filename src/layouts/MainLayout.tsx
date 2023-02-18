import { Footer } from "../sections/footer/footer";
import { Header } from "../sections/header/header";
import "./MainLayout.css";

export const Layout = ({children}: {children: any}) => {

    return (
        <>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    );
}