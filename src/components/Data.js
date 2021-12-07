

import { FaHome } from "react-icons/fa"
import { FaProjectDiagram } from "react-icons/fa"
import { FaQuestion } from "react-icons/fa"


export const Data = [
    {
        title:'Home',
        path:'/',
        icon:<FaHome className='home'/>,
        className:'nav-text'
    },
    {
        title:'Projects',
        path:'/projects',
        icon:<FaProjectDiagram className='project'/>,
        className:'nav-text'
    },
    {
        title:'About',
        path:'/about',
        icon:<FaQuestion className='about'/>,
        className:'nav-text'
    },
]