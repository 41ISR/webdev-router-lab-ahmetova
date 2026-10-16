import { Link, NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/search?q=" + encodeURIComponent(e.target.query.value.trim()))
  }


  return (
    <header className="header">
      <div className="header-inner">
        <Link
        to="/" 
        className="logo">
            <span className="logo-icon"></span>
              <span>MovieBox</span>
        </Link>

        <nav className="nav">
        <NavLink className={'nav-link'} to="/">Главная</NavLink>
          <NavLink className={'nav-link'} to="/">Фильмы</NavLink>
          <NavLink className={'nav-link'} to="/">О проекте</NavLink>
        </nav>

        <form onSubmit={handleSubmit} className="search-icon">
          <input name="query" type="text" placeholder="Поиск фильмов..."/>
        </form>
      </div>
    </header>
  );
}

function NavItem({ label, page, currentPage, onNavigate }) {
  return (
    <a
      href={'/' + (page === 'home' ? '' : page)}
      className={'nav-link' + (currentPage === page ? ' active' : '')}
      onClick={e => { e.preventDefault(); onNavigate(page); }}
    >
      {label}
    </a>
  );
}