import Left from "./Left";
import Right from "./Right";
import React from "react";
import './style.css'

export default  function Main(){
    const workers=[
        {
            id:'445',
            firstname:'Ravil',
            lastname:'Zabitli',
            position:'IT developer',
            salary:'2000'
        },
        {
            id:'446',
            firstname:'Esmer',
            lastname:'Nuriyeva',
            position:'Frontend developer',
            salary:'2900'
        },
        {
            id:'447',
            firstname:'Sona',
            lastname:'Quliyeva',
            position:'Back developer',
            salary:'3200'
        },
        {
            id:'448',
            firstname:'Elnur',
            lastname:'Neciyev',
            position:'SQL developer',
            salary:'4000'
        },
        {
            id:'449',
            firstname:'Qalib',
            lastname:'Besirov',
            position:'IT developer',
            salary:'3500'
        },

    ]
    return(
        <div className="main-container">
            <Left/>
            <div className="inner-container">
                <table id="workers">
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                    {workers.map((w)=>
                    <tr>
                        <td>{w.id}</td>
                        <td>{w.firstname}</td>
                        <td>{w.lastname}</td>
                        <td>{w.position}</td>
                        <td>{w.salary}$</td>
                    </tr>)}
                    
                </table>
            </div>
            <Right/>
        </div>
    )
}