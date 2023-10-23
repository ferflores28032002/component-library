import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";

import { ChakraProvider, ThemeProvider, useColorMode } from "@chakra-ui/react";
import { theme } from "../src/theme";

interface ColorModeProps {
  colorMode: "light" | "dark";
  children: JSX.Element;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
  },
};

function ColorMode(props: ColorModeProps) {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(props.colorMode);
  }, [props.colorMode]);

  return props.children;
}

export const decorators = [
  (Story, context) => (
    <ChakraProvider resetCSS={true}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <ColorMode colorMode={context.globals.colorMode}>
            <main>
              <Story />
            </main>
          </ColorMode>
        </ThemeProvider>
      </React.StrictMode>
    </ChakraProvider>
  ),
];

export const globalTypes = {
  colorMode: {
    name: "Color Mode",
    defaultValue: "light",
    toolbar: {
      items: [
        { title: "Light", value: "light" },
        { title: "Dark", value: "dark" },
      ],
      dynamicTitle: true,
    },
  },
};

export default preview;
