import React from 'react'
import './style.css'

export default function SideBar() {
  return (
    <div>
      <div class="fix" >
      <nav class="sidebar">
        <div class="logo">
        
        <img src='https://fluentmyenglish.com/static/media/Login_name.d27884b2b7c329f5c95c.png' id="img02"></img>
        </div>
        
        <ul>
          <li><a href="#">DASHBOARD</a></li>
          <li><a href="#">PACKAGE</a></li>
          <li><a href="#">SESSION HISTORY</a></li>
          <li><a href="#">PURCHASE HISTORY</a></li>
          <li><a href="#">FAQ & SUPPORT</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul> 
      </nav>
      </div>
      <div class="fix" id="navid">
      <section class="main">
        <div class="top-menu"></div>
            <div class="logout"></div>
        <div class="project"></div>
          <div class="project_title">
            <h1>Dashboard</h1>
            <div class="profile_card"></div>
            <div class="card0"><p>Log Out</p></div>
          </div>

          <div class="main-body" >
            <div class="main-content">
              <div class="list">
                <div class="card_title"><h3>Today</h3></div>
                <div class="card_title"><h3>Tomorrow</h3></div>
                <div class="card_title"><h3>Upcoming</h3></div>
              </div>
              <div class="row">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
              </div>
                <div class ="card2"><p>Let's Have a Talk</p></div>
            </div>
          </div>
      </section>
      </div>
    </div>
  )
}
