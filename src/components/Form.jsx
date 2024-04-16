import React, { useEffect, useState } from 'react'

const Form = ({setTodos,todos,id,setId}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const obj = {
        id: Math.random(),
        title,
        description
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(id){
            updateById(id)
            setId('')
        }else{
           
            setTodos([...todos,obj])

        }


        setDescription('')
        setTitle('')
    }

    useEffect(() => {
          if(id){
            const updatedData = todos.filter((d)=> d.id === id)
            setTitle(updatedData[0].title)
            setDescription(updatedData[0].description)
          }
    }, [id])

    const updateById = (id) => {
  
       setTodos((prevData)=> prevData.map((todo)=>todo.id === id ? {...todo,...obj}:todo))
    }
    
  return (

<form onSubmit={handleSubmit}>
 <div className="container mt-5 text-center form-input">
    <input 
    placeholder='Title' 
    className='mx-2' 
    type="text" 
    value={title} 
    onChange={(e)=>{setTitle(e.target.value)}}
    />

    <input 
    placeholder='Description' 
    className='mx-2' 
    type="text" 
    value={description} 
    onChange={(e)=>{setDescription(e.target.value)}}
    />

    {
        id &&(<button className='btn btn-warning mx-2'>Edit task</button>)
    }
    {
        !id &&(<button className='btn btn-success mx-2'>Add task</button>)
    }
</div>
</form>
    )
}

export default Form
