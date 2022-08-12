import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

import theme from "../config/theme";

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}