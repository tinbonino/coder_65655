import { createContext } from "react";

export const temas = {
    claro: {
        font:"black",
        background:"white"
    },
    oscuro: {
        font: "white",
        background:"black"
    }
};

const ThemeContext = createContext(temas.claro);

export default ThemeContext;