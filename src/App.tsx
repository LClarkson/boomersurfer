import { useState, useEffect } from 'react'
import './styles/App.css'

function App() {

  
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString());

/**************************************** TIMEBAR ***************************************/

  const getNextTime = (offsetMinutes: number): string => {
    const currentDate = new Date();
    currentDate.setMinutes(Math.ceil(currentDate.getMinutes() / 30) * 30 + offsetMinutes);
    return currentDate.toLocaleString("en-US", { hour: 'numeric', minute: 'numeric' });
  }
  
  const next30: string = getNextTime(0);
  const next60: string = getNextTime(30);
  const next90: string = getNextTime(60);

  // update current time display seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  
  return (
    <>
      <div id="viewPort">
        <div className="portWindow" id="channelInfo">
          <p>Channel Info</p>
        </div>
        <div className="portWindow" id="ytPlayer">
          <p>Video Preview</p>
        </div>
      </div>

      <div id="timebar">
        <div className="timeDivider">
          <p>{time}</p>
        </div>
        <div className="timeDivider">
          <p>{next30}</p>
        </div>
        <div className="timeDivider">
          <p>{next60}</p>
        </div>
        <div className="timeDivider">
          <p>{next90}</p>
        </div>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App
