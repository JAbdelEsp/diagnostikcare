import { createGlobalStyle } from "styled-components";
import { Inter, Playfair_Display } from "next/font/google";
// Opcional: usar la API de fuentes de Next.js (recomendado desde Next 13+)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const GlobalStyles = createGlobalStyle`
    :root {
        ${inter.variable};
        ${playfair.variable};
        --primary-color: #0070f3;
        --secondary-color: #1a1a1a;
        --text-color: #333;
        --background-color: #ffff;
        --link-color: #0070f3;
        --link-hover-color: #005bb5;
        --border-color: #eaeaea;
        --footer-background-color: #f8f8f8;
        --footer-text-color: none;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--font-inter), sans-serif;
        background-color: var(--background-color);
        color: var(--text-color);
        margin: 0;
        padding: 0;
    }
    .main {
        width: 100%;
        background-color: pink;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: grid;
    }
    .searchInput {
        margin-top: 2rem;
        margin-bottom: 0rem;
        padding: 0.5rem;
        width: 100%;
        max-width: 300px;
        border-radius: 5px;
        border: 2px solid var(--border-color);
    }
    .btnBack {
        width: 220px;
        background-color: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .pagination {
        width: 340px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        text-align: center;
    }
    .iconButton {
      margin: 3rem;
      border: none;
      width: 20px;
      background-color: transparent;
    }
    button[disabled]{
        opacity: 0.3;
    }
`;
