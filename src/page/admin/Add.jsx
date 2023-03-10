import axios from 'axios';
import React from 'react'

import { useState } from 'react';
function Add() {
  const [text ,     settext    ] = useState('')
  const [title ,    settitle   ] = useState('')
  const [prix ,     setprix    ] = useState('')
  const [category , setcategory] = useState('')
  const web = () => {
    return <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr/>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>
  }
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const response = await axios.post('http://localhost.pythonanywhere.com/api/items/add', formData);
      console.log(response.data)
      web()
      settext('')  
      settitle('')
      setprix('')
      setcategory('')
    }
    
      const [showMessage, setShowMessage] = useState(false);
      const handleClick = () => {
        setShowMessage(true);
    }
    function Msgshow() {
      return (<div class="alert alert-warning alert-dismissible fade show mt-5" role="alert">
                                    <strong>Holy guacamole!</strong> You tittle :{title} check in on some of those fields below.
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center flex-column">
        {showMessage && <Msgshow/>}
            <div className="justify-content-center my-5">
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={title}    onChange={e => settitle(e.target.value)} name="title"    placeholder="title"    />
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={text}     onChange={e => settext(e.target.value)} name="text"     placeholder="text"     />
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={prix}     onChange={e => setprix(e.target.value)} name="prix"     placeholder="prix"     />
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={category} onChange={e => setcategory(e.target.value)} name="category" placeholder="category" />
                <button className='btn btn-info' onClick={handleClick}>Show Message</button>
                  
            </div>
        </div>
    </form>
    </>
  )
}

export default Add