import { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import googleMapStyles, { MapStyled } from "./googlemap.styles";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      name: "PEMI Service",
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <MapStyled>
        <Map
          google={this.props.google}
          zoom={20}
          initialCenter={{
            lat: 49.2993259613859,
            lng: 21.314615285790136,
          }}
          defaultOptions={{
            disableDefaultUI: true, // disable default map UI
            draggable: true, // make map draggable
            keyboardShortcuts: false, // disable keyboard shortcuts
            scaleControl: true, // allow scale controle
            scrollwheel: true, // allow scroll wheel
            styles: googleMapStyles, // change default map styles
          }}
        >
          {/*  <Marker onClick={this.onMarkerClick} name={"PEMI Service"} /> */}
          <Marker onClick={this.onMarkerClick} name={"PEMI Service"} /> 
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h1>PEMI Service</h1>
            </div>
          </InfoWindow>
        </Map>
      </MapStyled>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBJv01T2m_u39H1Yk-OsPUTeu-0I4NVovQ",
})(MapContainer);
