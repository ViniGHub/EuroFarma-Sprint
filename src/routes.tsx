import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Layout } from './components/layout';
import { Trilha } from './pages/trilha';
import { Treinamentos } from './pages/treinamentos';
import { Biblioteca } from './pages/biblioteca';
import { Topicos } from './pages/topicos';
import { Exercicio } from './pages/exercicios';

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/trilha",
                element: <Trilha/>
            },
            {
                path: "/treinamentos/:id",
                element: <Treinamentos/>
            },
            {
                path: "/biblioteca",
                element: <Biblioteca/>
            },
            {
                path: "/biblioteca/?search=:search",
                element: <Biblioteca/>
            },
            {
                path: "/topicos/:id",
                element: <Topicos/>
            },
            {
                path: "/exercicio/:id",
                element: <Exercicio/>
            }
        ]
    },
]);

export { router };