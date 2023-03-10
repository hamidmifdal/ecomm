import { useState } from "react"
import { Card } from "../../components/index"

function Women(props) {
  const [category,setcategory] = useState('women')
  const item_women = props.item.filter(item => item.category === category)
  return (
    <>
        <div className="container">
            <div className="d-flex justify-content-between py-5 ml-5">
                <h2 className='text-start'>Women's</h2>
                <div className="text-end">
                    <button className='btn btn-info bg-none fs-6 active me-2'>color</button>
                    <button className='btn btn-info bg-none fs-6 active me-2'>type</button>
                    <button className='btn btn-info bg-none fs-6 active me-2'>prix</button>
                </div>
            </div>
            <Card item={item_women}/>
        </div>
    </>
  )
}

export default Women