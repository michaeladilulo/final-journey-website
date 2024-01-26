import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import First from '../pages/initial-page/First';
import FirstCongrats from '../pages/second-page/FirstCongrats';
import Second from '../pages/third-page/Second';
import SecondCongrats from '../pages/fourth-page/SecondCongrats';
import FinalPage from '../pages/final-page/FinalPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path = "/" element={<First />} />
            <Route path = "nice-you-did-it" element={<FirstCongrats />} />
            <Route path = "you-got-this" element={<Second />} />
            <Route path = "congrats-that-was-amazing" element={<SecondCongrats />} />
            <Route path = "nicely-done-team" element={<FinalPage />} />
        </Route>
    )
)

function AppRoutes() {
    return (
        <RouterProvider router={router} />
    )
}

export default router;