import React, {Component} from 'react';

import GoogleMapReact, {Marker} from 'google-map-react';

class SimpleMap extends Component {
    static defaultProps = {
      center: [59.955413, 30.337844],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

    render() {
        const AnyReactComponent = ({ text }) => <div className="google_marker">{text}</div>;
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
            </GoogleMapReact>
        );
    }
}
export default SimpleMap;
