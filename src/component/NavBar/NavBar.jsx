import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = ({ logo, items, btn }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <nav>
      <h1 className="logo">{logo}</h1>

      {/* القائمة الرئيسية / المنبثقة */}
      <div className={`nav-menu ${open ? 'open' : ''}`}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {item.icon}
                {item.content}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* زر Sign In */}
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `signup-btn ${isActive ? 'active' : ''}`
          }
          onClick={() => setOpen(false)}
        >
          {btn}
        </NavLink>
      </div>

      {/* زر الهامبرغر */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* الخلفية الغامقة */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </nav>
  );
};

export default NavBar;