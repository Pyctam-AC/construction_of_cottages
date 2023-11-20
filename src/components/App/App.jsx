import './App.scss'
import { Route, Routes } from 'react-router'
import House from '../../pages/House/House'


const App = () => {
  
  return (
    <Routes>
      {/* Route path="/" element={<PageMain />} /> */}
      <Route path="/illumination" element={<House />} />
    </Routes>
    
  )
}

export default App
