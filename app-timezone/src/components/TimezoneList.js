import * as React from 'react';
import eventBus from "../eventBus";
const TimezoneList = () => {
    const [zones, setZones] = React.useState([])
    React.useEffect(()=>{
  // @todo put to env var or const
  fetch('http://api.timezonedb.com/v2.1/list-time-zone?key=G72XL0Q2W7JS&format=json')
      .then(r => r.json())
      .then(r => {return setZones(r.zones)})
},[])
      return (zones.length > 0 ?<ul>
          {
              zones.map(z => (<li key={z.zoneName} onClick={e => {
                  eventBus.dispatch("tzApply", { message: z });
              }}>{z.zoneName}</li>))

          }

      </ul>: <div>loading</div>
    )
}

export default TimezoneList
