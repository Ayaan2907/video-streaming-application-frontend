import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "./ThemeProvider";
import { Stack } from "@mantine/core";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <Stack align="center" mt={50}>
                    <RouterProvider router={BrowserRouter} />
                </Stack>
            </ThemeProvider>
        </Provider>
    </StrictMode>
);
