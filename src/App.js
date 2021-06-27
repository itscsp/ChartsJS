import React from 'react'
import './App.css'
import BarChart from './components/BarChart';

const App = () => {
  return (
    <div>
      <h1 className="heading">Data visualization with ChartJS </h1>
      <BarChart />
      <hr />
      <h5 className="footer">Design by @itscsp </h5>
    </div>
  )
}

export default App
