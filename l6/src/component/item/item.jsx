import './style.css'
import React from 'react'
import User from './user'

function Item(){
      const users=[
        {
            firstname:"Azad",
            lastname:"Suleymanov",
            age:15
        },
        {
            firstname:"Orxan",
            lastname:"Firidunlu",
            age:28
        },
        {
            firstname:"Tamerlan",
            lastname:"Ismayilov",
            age:15
        },
        {
            firstname:"Nurlan",
            lastname:"Musayev",
            age:24
        }
        
      ]
      return(
        <div className='items-container'>
          {users.map((u)=>
            <User firstname={u.firstname} lastname={u.lastname} age={u.age} />
          )}
        </div>
      )
}
export default Item
