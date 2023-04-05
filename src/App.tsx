import { Text, Button, Stack } from "@mantine/core";
import { AuthenticationForm } from "./pages/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Button>Home</Button> },
            { path: "/about", element: <Button>About</Button> },
            { path: "/auth", element: <AuthenticationForm /> },
        ],
    }, //new router v6
]);
export default function App() {
    return (
        <>
            <Text align="center" mt={10}>
                {" "}
                NAVBAR
            </Text>
            <Stack align="center" mt={30}>
                <Outlet />
                {/* acts as  place to render the children components */}
            </Stack>
        </>
    );
}
