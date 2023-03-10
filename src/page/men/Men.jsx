import { useState } from 'react'
import {Card} from './../../components/index'

function Men(props) {
  const[category,setcategory] = useState('men')
  const item_men = props.item.filter(item => item.category === category)
  return (
    
    <>
        <div className="container">
            <div className="d-flex justify-content-between py-5 ml-5">
                <h2 className='text-start'>Men's</h2>
                <div className="text-end">
                    <button className='btn fs-6 active me-2'>color</button>
                    <button className='btn fs-6 disabled me-2'>type</button>
                    <button className='btn fs-6 disabled me-2'>prix</button>
                </div>
            </div>
            <Card item={item_men}/>
        </div>
    </>
  )
}

export default Men