import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../theme';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
  { path: '/blog', label: 'Blog' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'text-slate-700 dark:text-slate-200'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="text-lg font-semibold text-primary">
          Zaid Monis
        </Link>
        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 p-2 text-sm dark:border-slate-700"
          >
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
          <button
            aria-label="Toggle menu"
            className="rounded-lg border border-slate-200 p-2 dark:border-slate-700"
            onClick={() => setOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 p-2 text-sm dark:border-slate-700"
          >
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
        </nav>
      </div>
      {open && (
        <div className="mx-4 mb-4 rounded-xl border border-slate-200 bg-white p-3 shadow-md dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
