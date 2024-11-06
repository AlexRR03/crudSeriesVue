import { createRouter, createWebHistory } from "vue-router";
import HomeSeries from './components/HomeSeries'
import DetalleSerie from './components/DetalleSerie'
import PersonajesSerie from './components/PersonajesSerie'
import CrearPersonaje from './components/CrearPersonaje'

const myRoutes=[
    {
        path:"/",
        component:HomeSeries
    },
    {
        path:"/serie/:id",
        component:DetalleSerie
    },
    {
        path:"/serie/personajes/:idserie",
        component:PersonajesSerie
    },
    {
        path:"/crear",
        component:CrearPersonaje
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router