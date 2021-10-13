import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

import BarChart from './Chart/BarChart'
import { barSeriesBetweenMonths, generateBarSeries } from './data'

import './styles.css'

function App() {
  const [displayBy, setDisplayBy] = useState('day')
  const ref = useRef(null)
  const [numberOfDataPoints, setNumberOfDataPoints] = useState(30)
  const barSeries = generateBarSeries(numberOfDataPoints)
  return (
    <div className="App">
      <h2>Select chart range</h2>
      <div>
        <button onClick={() => setDisplayBy('day')}>Day</button>
        <button onClick={() => setDisplayBy('week')}>Week</button>
        <button onClick={() => setDisplayBy('month')}>Month</button>
      </div>
      <div>
        <button onClick={() => ref.current.chart.toolbar.downloadPNG()}>
          Download PNG
        </button>
        <button onClick={() => ref.current.chart.toolbar.downloadSVG()}>
          Download SVG
        </button>
      </div>
      <div>
        Generate random data{' '}
        <form
          onSubmit={e => {
            e.preventDefault()
            setNumberOfDataPoints(+e.target.numDataPoint.value)
          }}
        >
          <input
            type="number"
            name="numDataPoint"
            defaultValue={numberOfDataPoints}
          />
          <button>Generate</button>
        </form>
      </div>
      <h2>Sentiment by {displayBy}</h2>
      <BarChart ref={ref} data={barSeries} stacked displayBy={displayBy} />
      {/* <BarChart data={barSeries} stacked displayBy={displayBy} /> */}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
