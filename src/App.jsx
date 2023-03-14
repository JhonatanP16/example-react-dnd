import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Basket from "./Components/Basket"
import List from "./Components/List"

function App() {

  return (
   <DndProvider backend={HTML5Backend}>
    {/* Change for Bakset.jsx */}
    <List/>
   </DndProvider>
  )
}

export default App
