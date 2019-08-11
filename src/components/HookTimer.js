import React, {useState, useEffect, useRef} from 'react';

function HookTimer(){
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(previousTimer => previousTimer + 1);
    }, 1000);

    //clean-up function
    //componentWillUnmount behaviour
    return() => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return(
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
    </div>
  )
}

export default HookTimer;
