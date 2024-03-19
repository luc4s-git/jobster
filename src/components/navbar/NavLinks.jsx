import { NavLink } from 'react-router-dom';
import links from '../../utils/links';

export default function NavLinks({ toggleSideBar }) {
  return (
    <div className="nav-links">
      {links.map((item) => {
        return (
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            key={item.id}
            to={item.path}
            onClick={toggleSideBar}
          >
            <span className="icon">{item.icon}</span>
            {item.text}
          </NavLink>
        );
      })}
    </div>
  );
}
