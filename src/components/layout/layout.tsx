import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./layout.style.css";

export const Layout = ({children}: {children: any}) => {

    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}