import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/PlusIcon"



function App() {  return (
    <div>
    <Button variant="primary" size="sm" onClick={()=>{}} text={"share"} startIcon={<PlusIcon size="md"/>}/>
    <Button variant="secondary" size="md" onClick={()=>{}} text={"Add content"}/>
    <Button variant="secondary" size="lg" onClick={()=>{}} text={"Add content"} />
    </div>
  )
}

export default App
