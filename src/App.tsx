import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { GlogalStore } from './domains/components/GlobalStore'
import { Home } from './domains/home/Home'

export const App = () => {
  return (
    <GlogalStore.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </GlogalStore.Provider>
  )
}
