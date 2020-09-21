import * as React from 'react';
import {DateTime} from 'luxon';
import eventBus from "../eventBus";

const key = 'G72XL0Q2W7JS';

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
const TimezoneList = () => {
    const [zones, setZones] = React.useState([])
    React.useEffect(()=>{
  fetch(`http://api.timezonedb.com/v2.1/list-time-zone?key=${key}&format=json`)
      .then((response) => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Something went wrong');
          }
      })
      .then(r => {return setZones(getRandom(r.zones,10))})
      .catch((error) => {
          console.log(error);
      });

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
                      <a href="#" onClick={() => {
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
