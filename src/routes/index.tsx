import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Props from "../types";

export default function RoutesPage(props: Readonly<Props>) {
    return (
        <Routes>
            <Route index path="*" element={<Home {...props} />} />
            <Route path="/home" element={<Home {...props} />} />
        </Routes>
    );
};