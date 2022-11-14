import React from 'react'
import { Link } from 'react-router-dom'
import {MdAddBox} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'

function Navigation() {
  return (
    <div className="p-4 bg-primary text-white rounded">
        <table>
          <tbody>
            <tr>
            <td><h2>LearnIT Flashcards</h2></td>
            <td><Link to="/" className="btn btn-secondary"><AiOutlineHome/></Link></td>
            <td><Link to ="/add-question" className="btn btn-secondary"><MdAddBox/>&nbsp;Add a question</Link></td>
            </tr>
          </tbody>
        </table>
    </div> 
  )
}

export default Navigation
