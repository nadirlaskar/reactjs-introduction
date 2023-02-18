import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Clock(props) {
  const {timeZone} = props;
  const [time, setTime] = useState('');

  useEffect(() => { 
    const intervalId = setInterval(() => {
      const newDate = new Date();
      const time = newDate.toLocaleString('en-US', {timeZone})
      setTime(time)
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone])

  if (!time) return null;
  
  return (
    <div style={{margin: '16px 0'}}>
      {time} ({timeZone})
    </div>
  )
}

Clock.propTypes = {
  timeZone: PropTypes.string.isRequired
}
Clock.defaultProps = {
  timeZone: 'America/New_York'
}

export default Clock;