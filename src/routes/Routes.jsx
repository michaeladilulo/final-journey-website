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