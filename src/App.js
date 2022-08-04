import React, { useState, useEffect } from "react"

function App() {

  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [hundread, setHundread] = useState(0);
  const [twoHnd, setTwoHnd] = useState(0);
  const [fiveHnd, setFiveHnd] = useState(0);
  const [twoThsn, setTwoThsn] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(ten * 10 + twenty * 20 + fifty * 50 + hundread * 100 + twoHnd * 200 + fiveHnd * 500 + twoThsn * 2000);
  })

  return (
    <>
      <div className="container">
        <h1>Currency Counter</h1>
        <div className="main my-4">
          <div className="d-flex my-3">
            <button className="btn btn-info mr-4 col-md-1">10</button>
            <input type="number" className="form-control col-md-4" value={ten} onChange={(e) => setTen(e.target.value)} />
          </div>
          <div className="d-flex my-3">
            <button className="btn btn-info mr-4 col-md-1">20</button>
            <input type="number" className="form-control col-md-4" value={twenty} onChange={(e) => setTwenty(e.target.value)} />
          </div>
          <div className="d-flex my-3">
            <button className="btn btn-info mr-4 col-md-1">50</button>
            <input type="number" className="form-control col-md-4" value={fifty} onChange={(e) => setFifty(e.target.value)} />
          </div>
          <div className="d-flex my-3">
            <button className="btn btn-info mr-4 col-md-1">100</button>
            <input type="number" className="form-control col-md-4" value={hundread} onChange={(e) => setHundread(e.target.value)} />
          </div>
          <div className="d-flex my-3">
            <button className="btn btn-info mr-4 col-md-1">200</button>
            <input type="number" className="form-control col-md-4" value={twoHnd} onChange={(e) => setTwoHnd(e.target.value)} />
          </div>
          <div className="d-flex my-3">
            < button className="btn btn-info mr-4 col-md-1">500</button >
            <input type="number" className="form-control col-md-4" value={fiveHnd} onChange={(e) => setFiveHnd(e.target.value)} />
          </div >
          <div className="d-flex my-3">
            <button button className="btn btn-info mr-4 col-md-1">2000</button >
            <input type="number" className="form-control col-md-4" value={twoThsn} onChange={(e) => setTwoThsn(e.target.value)} />
          </div >
        </div >
        <div>
          <button className="btn btn-success mr-4 col-md-2">Total : {total}</button>
        </div>
      </div >
    </>
  )
}

export default App