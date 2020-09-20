import * as React from 'react';
import TimezoneList from "./components/TimezoneList";

export default class App extends React.Component {
    webComponentAttributeChanged() {
        // to track attribute change
    }

    render() {
        return (
            <TimezoneList/>
        )
    }
}
