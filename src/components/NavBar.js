import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((e)=> <a key={e} href={`#${e}`}>{e}</a>)}
  </nav>;
}

export default NavBar;
