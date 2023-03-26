import logo from '../../assets/tmovie.jpg'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'

const headerNav=[
    {
       title:'Home',
       path: '/'
    },
    {
       title:'Movies',
       path: '/movie'
    },
    {
       title:'Tv',
       path: '/tv'
    },
]

const Header = props => {
    const {pathname}=useLocation();

    const active= headerNav.findIndex(e => e.path ===pathname);
   

  return (
   <div className="header">
    <div className="header__wrap">
        <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">LMovie</Link>
        </div>
    
        <ul className="header__nav">
        {
            headerNav.map((e,i) => (
                <li key={i} className={`${i===active ? 'active' :''}`}>
                    <Link to={e.path}>
                        {e.title}
                    </Link>
                </li>

            ))
        }
         </ul>
    </div>

   </div>
  )
}


export default Header