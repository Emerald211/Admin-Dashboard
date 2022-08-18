import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom'

function Jobs() {

  let navigate = useNavigate()

  const addNote = () => {
    navigate("/admin/editjob")
  }

  return (
    <div className='jobs'>
        <div></div>
      <div onClick={addNote} style={{ background: "#990099", position: "fixed", bottom: "10px", right: "30px" }} className="flex p-5 items-center justify-center rounded-full text-white"><FontAwesomeIcon icon={faAdd} /></div>
      
    </div>
  )
}

export default Jobs