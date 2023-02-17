import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'relative',
    width:"608px",height:"624px"
  }

};


export class CurrentLocation extends React.Component {

   //Making component stateful

    constructor(props) {
        super(props);
    
        const data = this.props.data;
        this.state = {
          currentLocation: {
            lat: data.lat,
            lng: data.lon
          }
        };

      }

   // this will set the current location if currentLocation lat, long is not matching with the one sent in params
      changeCurrentLocation(){
       
        if  (this.props.data.lat !== this.state.currentLocation.lat ||
          this.props.data.lon !== this.state.currentLocation.lon){
              this.setState({
                currentLocation: {
                  lat: this.props.data.lat,
                  lng: this.props.data.lon
                }
              });
             
        }
      }


      componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
          
          this.recenterMap();
        }

        if (prevState.currentLocation.lat !== this.props.data.lat || prevState.currentLocation.lng !== this.props.data.lon){
          this.setState({
            currentLocation: {
              lat: this.props.data.lat,
              lng: this.props.data.lon
            }
           
          });
          this.loadMap();
        }

       
        
      }

      //This method will recenterthe map to the new co-ords
      recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
         
        }
      }

    //This might not be required
      componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {

          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              this.setState({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                }
              });
            });
         }
          
        }
        
        this.changeCurrentLocation();
        this.loadMap();
      }

      //Loads the map with the new co-ords
      loadMap() {
        if (this.props && this.props.google) {
          // checks if google is available
          const { google } = this.props;
          const maps = google.maps;
    
          const mapRef = this.refs.map;
    
          // reference to the actual DOM element
          const node = ReactDOM.findDOMNode(mapRef);
    
          let { zoom } = this.props;
          const { lat, lng } = this.state.currentLocation;
          const center = new maps.LatLng(lat, lng);
    
          const mapConfig = Object.assign(
            {},
            {
              center: center,
              zoom: zoom
            }
          );
    
          // maps.Map() is constructor that instantiates the map
          this.map = new maps.Map(node, mapConfig);
          
        }
      }
    

    renderChildren() {
        const { children } = this.props;
    
        if (!children) return;
    
        return React.Children.map(children, c => {
          if (!c) return;
    
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        });
      }
    
      render() {
        const style = Object.assign({}, mapStyles.map);
        
        return (
          <div>
            <div style={style} ref="map">
              Loading map...
            </div> 
            {this.renderChildren()}
          </div>
        );
      }
  
}

export default CurrentLocation;