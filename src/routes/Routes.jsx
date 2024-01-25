import { createBrowserRouter } from "react-router-dom";
import First from '../pages/initial-page/First';
import FirstCongrats from '../pages/second-page/FirstCongrats';
import Second from '../pages/third-page/Second';
import SecondCongrats from '../pages/fourth-page/SecondCongrats';
import FinalPage from '../pages/final-page/FinalPage';

const router = createBrowserRouter([{
    path: "/",
    element: <First></First>,
    children:[
        {
            path: "/nice-you-did-it",
            element: <FirstCongrats></FirstCongrats>
        },
        {
            path: "/you-got-this",
            element: <Second></Second>
        },
        {
            path: "/congrats-that-was-amazing",
            element: <SecondCongrats></SecondCongrats>
        },
        {
            path: "nicely-done-team",
            element: <FinalPage></FinalPage>
        }
    ]
}])

export default router;