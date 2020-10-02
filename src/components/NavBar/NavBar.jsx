import React from 'react';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
              <li><a href="/users" className="nav-link">Users</a></li>
              <li><a href="/invitation" className="nav-link">Invitation Page</a></li>
              <li><a href="/welcome" className="nav-link">Welcome</a></li>
              <li><a href="/needselection" className="nav-link">Need Selection</a></li>
              <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
            </ul>
          </div>
        </nav>
        :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href="/login" className="nav-link">Log In</a></li>
              <li><a href="/users" className="nav-link">Users</a></li>
              <li><a href="/signup" className="nav-link">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
