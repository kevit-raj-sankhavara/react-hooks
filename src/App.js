import React, { useState, useDeferredValue, useMemo, useEffect } from "react"

function App() {

  const [value, setValue] = useState("")
  const deferedValue = useDeferredValue(value)

  const list = useMemo(() => {
    const l = []
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{value}</div>)
    }
    return l
  }, [deferedValue])

  useEffect(() => {
    console.log(value, deferedValue);
  }, [value, deferedValue])



  return (
    <div className="container my-4">
      <h1>useTransition</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <div>
        {list}
      </div>
    </div >
  )
}

export default App