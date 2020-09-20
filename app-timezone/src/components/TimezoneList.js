import * as React from 'react';
import {DateTime} from 'luxon';
import eventBus from "../eventBus";
const TimezoneList = () => {
    const [zones, setZones] = React.useState([])
    React.useEffect(()=>{
  // @todo put to env var or const
  fetch('http://api.timezonedb.com/v2.1/list-time-zone?key=G72XL0Q2W7JS&format=json')
      .then(r => r.json())
      .then(r => {return setZones(r.zones)})
},[])

      return (zones.length > 0 ?<table className="h-64">
        <thead>
        <tr>
        {['Offset','Timezone Abbr & Name'].map(th => <th key={th}>{th}</th>)}
        </tr>
        </thead>
        <tbody>
          {
              zones.map(z => {
                const tz = DateTime.local().setZone(z.zoneName);
                return (
                <tr key={z.zoneName}>
                  <td>UTC {tz.toFormat('ZZ')}</td>
                  <td style={{'display':'flex'}}>
                    <span style={{'width': '100px'}}>
                      <a href="#" onClick={e => {
                            eventBus.dispatch("tzApply", { message: z });
                        }}>{tz.toFormat('ZZZZ')}
                      </a>
                    </span>
                    <span>{tz.toFormat('ZZZZZ')}</span>
                  </td>
              </tr>)}
              )

          }
          </tbody>

      </table>: <div>loading timzone...</div>
    )
}

export default TimezoneList
