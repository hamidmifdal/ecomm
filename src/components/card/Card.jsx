

function Card(props) {
    var img = "https://i.pinimg.com/564x/60/84/e0/6084e01835194488d23d0b1b6b52b2fe.jpg"
    // const data = [
    //     {title:"hamid",text:"text",prix:'120 dh',img:img},
    //     {title:"hamid",text:"text",prix:'120 dh',img:img},
    //     {title:"hamid",text:"text",prix:'120 dh',img:img},
    //     {title:"hamid",text:"text",prix:'120 dh',img:img},
    //     {title:"hamid",text:"text",prix:'120 dh',img:img},
    //     {title:"hamid",text:"text",prix:'120 dh',img:img}
    // ]
  return (
    <>
    <div className="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {props.item.map(i => (
            <div class="col">
            <div class="card px-5" style={{border:"none"}}>
              <img src={img} class="img-fluid" alt="..."/>
              <div class="card-body text-center">
                <h5 class="card-title">{i.title}</h5>
                <p class="card-text">{i.text}</p>
                <p class="card-text">{i.prix}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    
    </>
  )
}

export default Card