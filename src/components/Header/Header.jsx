import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'stiky',
        top: '0',
        width: '100%',
        height: '70px',
        boxShadow:
          '0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12)',
      }}
    >
      <nav>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            alignItems: 'center',
            listStyle: 'none',
          }}
        >
          <li>
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
                color: '#000',
                fontSize: '20px',
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              style={{
                textDecoration: 'none',
                color: '#000',
                fontSize: '20px',
              }}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
