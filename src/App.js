import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav , Home , Footer , Men , Women , Add} from "./components/index";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost.pythonanywhere.com/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
       <Route index         element={<Home  item={items} />} />
       <Route path="/Men"   element={<Men   item={items} />} />
       <Route path="/Women" element={<Women item={items} />} />
       <Route path="/Add"   element={<Add/>}/>
      </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;