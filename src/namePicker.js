import React, {useState} from 'react'
import {FiEdit,FiSave} from 'react-icons/fi'

function NamePicker(props){
  const [name,setName] = useState('')
  const [editing,setEditing] = useState(false)
  return <div className="name-picker">

    {editing && <>
      <input value={name} 
        onChange={e=> setName(e.target.value)}
      />
      <FiSave size={20} color="white" 
        onClick={()=> {
          setEditing(!editing)
          props.saveName(name)
        }}
      />
    </>}

    {!editing && <>
      <span>{name}</span>
      <FiEdit size={20} color="white" 
        onClick={()=> setEditing(!editing)}
      />
    </>}

  </div>
}

export default NamePicker