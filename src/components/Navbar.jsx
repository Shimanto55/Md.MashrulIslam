import { useState } from "react";
import "./Navbar.css";

export default function Navbar(){
  const [open,setOpen] = useState(false);

  const links = [
    {href:"#home",label:"Home"},
    {href:"#about",label:"About"},
    {href:"#skills",label:"Skills"},
    {href:"#projects",label:"Projects"},
    {href:"#reviews",label:"Reviews"},
    {href:"#contact",label:"Contact"},
    {href:"#resume",label:"Resume"},
  ];

  return (
    <header className="nav shadow-line">
      <div className="container nav-inner">
        <a href="#home" className="brand">MMI<span className="dot">.</span>dev</a>

        <nav className="nav-desktop">
          {links.map(l=>(
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <button className="burger" aria-label="menu" onClick={()=>setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          {links.map(l=>(
            <a key={l.href} href={l.href} className="nav-link" onClick={()=>setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
