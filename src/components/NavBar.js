import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElement = links.map((link) => {
    // Modify the href attribute to include #
    const href = `#${link}`
    return <a href={href} key={link}>{link}</a>
  })
  return <nav>{/* display an <a> tag for each link here */} 
    {linksElement}
  </nav>;
}

export default NavBar;
