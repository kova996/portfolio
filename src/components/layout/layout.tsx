import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import { Test } from "../../pages/main/test";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./layout.style.css";

export const Layout = ({children}: {children: any}) => {

    return (
        <>
            <Router>
                <Header></Header>
            <main>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/test" element={<Test />}/>
                </Routes>
            </main>
            <Footer></Footer>
            </Router>
        </>
    );
}