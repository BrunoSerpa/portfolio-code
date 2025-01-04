import { Route, Routes } from "react-router-dom";
import Props from "../types";
import { About, Experience, Home } from "../pages";

export default function RoutesPage(props: Readonly<Props>) {
    return (
        <Routes>
            <Route index path="*" element={<Home {...props} />} />
            <Route path="/home" element={<Home {...props} />} />
            <Route path="/about" element={<About {...props} />} />
            <Route path="/experience" element={<Experience {...props} />} />
        </Routes>
    );
};