import './style.css'
import React from 'react'

function TableComponent (){
    return (
        <table className='workers-table'>
            <tr>
                <th>id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>age</th>
            </tr>
            <tr>
                <td>01</td>
                <td>azad</td>
                <td>suleymanov</td>
                <td>14</td>
            </tr>
            <tr>
                <td>02</td>
                <td>orxan</td>
                <td>firidunlu</td>
                <td>28</td>
            </tr>
            <tr>
                <td>03</td>
                <td>tamerlan</td>
                <td>ismayilov</td>
                <td>14</td>
            </tr>
            <tr>
                <td>04</td>
                <td>abdul</td>
                <td>mehreliyev</td>
                <td>18</td>
            </tr>
        </table>
    )
}

export default TableComponent