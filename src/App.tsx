import Resumo from "./Pages/Resumo"
import SideNav from "./Components/SideNav"
import Header from "./Components/Header"
import './App.css'
import { DataContextProvider } from "./Context/DataContext"

function App() {

  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
