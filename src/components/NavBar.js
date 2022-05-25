import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {<a key={1} href={links.home}>Home</a>}
    {<a key={2} href={links.about}>About</a>}
    {<a key={3} href={links.projects}>Projects</a>}
  
  </nav>;
}

export default NavBar;
