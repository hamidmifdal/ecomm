import { Youself , Card } from "../../components/index"

function Home(props) {
    const color_btn = {color:"#ff8787"}
    const bg = {background:"#fff5f5"}
    const border = {border: "solid 1px #fff5f5"}
  return (
    <>
    <div className="container">
        <Youself/>
        <div className="d-flex" style={{bg}}>
            <button className="btn me-5" style={color_btn}>all</button>
            <button className="btn me-5" style={color_btn}>decor</button>
            <button className="btn me-0" style={color_btn}>futorial</button>
        </div>
        <Card item={props.item} />
        <div className="text-center m-1 p-1 fw-lighter" style={border}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?
        </div>
    </div>
    </>
  )
}

export default Home