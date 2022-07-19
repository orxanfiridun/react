import './style.css'
import React from 'react'
import { useState } from 'react'

function Header() {
   const[header_text,setHeader]=useState("")
   const[content_text,setContent]=useState("")
   function showHome() {
      document.querySelector('.main-container').style.marginTop="280px"
      document.getElementById('about').style.backgroundColor="blue"
      document.getElementById('services').style.backgroundColor="blue"
      document.getElementById('contact').style.backgroundColor="blue"
      document.querySelector('.info-container').style.animation = "slideDown 1s"
      document.querySelector('.info-container').style.bottom = "352px"
      document.getElementById('home').style.backgroundColor="darkblue"
      document.querySelector('.info-container').onmouseleave = () => {
         document.querySelector('.info-container').style.animation = "slideUp 1s"
         document.querySelector('.info-container').style.bottom = "700px"
         document.getElementById('home').style.backgroundColor="blue"
         document.querySelector('.main-container').style.marginTop="40px"
      }
      setHeader('Home header')
      setContent('Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem eius iure vel sapiente quasi dolorem laborum deleniti? Mollitia cupiditate perferendis vero aliquid necessitatibus quam ratione, voluptatibus commodi fuga temporibus nam quia dicta maxime explicabo officia corporis delectus hic. Dolore, blanditiis facilis. Obcaecati, iure laudantium? Veritatis aut a esse unde?')
   }
   function showAbout() {
      document.querySelector('.main-container').style.marginTop="280px"
      document.getElementById('home').style.backgroundColor="blue"
      document.getElementById('services').style.backgroundColor="blue"
      document.getElementById('contact').style.backgroundColor="blue"
      document.querySelector('.info-container').style.animation = "slideDown 1s"
      document.querySelector('.info-container').style.bottom = "352px"
      document.getElementById('about').style.backgroundColor="darkblue"
      document.querySelector('.info-container').onmouseleave = () => {
         document.querySelector('.info-container').style.animation = "slideUp 1s"
         document.querySelector('.info-container').style.bottom = "700px"
         document.getElementById('about').style.backgroundColor="blue"
         document.querySelector('.main-container').style.marginTop="40px"
      }
      setHeader('About header')
      setContent('About Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem eius iure vel sapiente quasi dolorem laborum deleniti? Mollitia cupiditate perferendis vero aliquid necessitatibus quam ratione, voluptatibus commodi fuga temporibus nam quia dicta maxime explicabo officia corporis delectus hic. Dolore, blanditiis facilis. Obcaecati, iure laudantium? Veritatis aut a esse unde?')
   }
   function showContact() {
      document.querySelector('.main-container').style.marginTop="280px"
      document.getElementById('about').style.backgroundColor="blue"
      document.getElementById('services').style.backgroundColor="blue"
      document.getElementById('home').style.backgroundColor="blue"
      document.querySelector('.info-container').style.animation = "slideDown 1s"
      document.querySelector('.info-container').style.bottom = "352px"
      document.getElementById('contact').style.backgroundColor="darkblue"
      document.querySelector('.info-container').onmouseleave = () => {
         document.querySelector('.info-container').style.animation = "slideUp 1s"
         document.querySelector('.info-container').style.bottom = "700px"
         document.getElementById('contact').style.backgroundColor="blue"
         document.querySelector('.main-container').style.marginTop="40px"
      }
      setHeader('Contact header')
      setContent('Contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem eius iure vel sapiente quasi dolorem laborum deleniti? Mollitia cupiditate perferendis vero aliquid necessitatibus quam ratione, voluptatibus commodi fuga temporibus nam quia dicta maxime explicabo officia corporis delectus hic. Dolore, blanditiis facilis. Obcaecati, iure laudantium? Veritatis aut a esse unde?')
   }
   function showServices() {
      document.querySelector('.main-container').style.marginTop="280px"
      document.getElementById('about').style.backgroundColor="blue"
      document.getElementById('home').style.backgroundColor="blue"
      document.getElementById('contact').style.backgroundColor="blue"
      document.querySelector('.info-container').style.animation = "slideDown 1s"
      document.querySelector('.info-container').style.bottom = "352px"
      document.getElementById('services').style.backgroundColor="darkblue"
      document.querySelector('.info-container').onmouseleave = () => {
         document.querySelector('.info-container').style.animation = "slideUp 1s"
         document.querySelector('.info-container').style.bottom = "700px"
         document.getElementById('services').style.backgroundColor="blue"
         document.querySelector('.main-container').style.marginTop="40px"
      }
      setHeader('Services header')
      setContent('Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem eius iure vel sapiente quasi dolorem laborum deleniti? Mollitia cupiditate perferendis vero aliquid necessitatibus quam ratione, voluptatibus commodi fuga temporibus nam quia dicta maxime explicabo officia corporis delectus hic. Dolore, blanditiis facilis. Obcaecati, iure laudantium? Veritatis aut a esse unde?')
   }
   return (
      <React.Fragment>
         <ul className='navigation'>
            <button onClick={showHome} id="home">Home</button>
            <button onClick={showAbout} id="about">About</button>
            <button onClick={showServices} id="services">Services</button>
            <button onClick={showContact} id="contact">Contact</button>
         </ul>
         <div className='info-container'>
            <h2>{header_text}</h2>
            <hr />
            <p>{content_text}</p>
         </div>
      </React.Fragment>
   )
}
export default Header