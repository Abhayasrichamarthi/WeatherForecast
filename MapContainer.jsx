import { Component } from "react";

import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

import CurrentLocation from "./CurrentLocation";


import {
   UilTemperature, UilTear, UilWind} from "@iconscout/react-unicons";

import { iconUrlFromCode } from "../Services/weatherService";
const mapStyles = {
    width:"500px",height:"954px"

    
};

CurrentLocation.defaultProps = {
    zoom: 12,
    initialCenter: {
      lat: -1.2884,
      lng: 36.8233
    },
    centerAroundCurrentLocation: false,
    visible: true
  };

class MapContainer2 extends Component{

    
  
    state = {
        showingInfoWindow: true,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
        icon : this.props.data.icon,
        temp : this.props.data.temp,
        feels_like : this.props.data.feels_like,
        humidity : this.props.data.humidity,
        speed : this.props.data.speed,
        markerposition : {
         lat : this.props.data.lat,
         lng:  this.props.data.lon
        }
    
     };

    onMarkerClick = (props, marker, e) =>
    
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,


      icon : this.props.data.icon,
      temp : this.props.data.temp,
      feels_like : this.props.data.feels_like,
      humidity : this.props.data.humidity,
      speed : this.props.data.speed ,
      markerposition : {
       lat : this.props.data.lat,
       lng:  this.props.data.lon}
      
    });

    

    onLoad = (props, marker, e) =>

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      markerposition: { lat: props.data.lat, lng: props.data.lon }
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
}
    
    
    render() {

      
        return (
            <CurrentLocation
             navigateToLocation
            google={this.props.google}
            data ={this.props.data}
            
          >
            {/* <Marker onClick={this.onMarkerClick} name={'Current Location'} /> */}
            <Marker onClick={this.onMarkerClick} name={this.props.data.name}    />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div className=" bg-gradient-to-br `${this.props.color}`">
                <h4 className=" text-white text-xl font-medium">{  `${this.props.data.name},${this.props.data.country}`  }</h4>

                
        <div className=" flex flex-row items-center justify-between text-white py-3">
            <img src = {iconUrlFromCode(this.state.icon)} alt="" className="w-20">
            </img>
            <p className=" text-5xl"> {`${this.state.temp.toFixed()}°`}  </p>
            <div className=" flex flex-col space-y-2 ">
                <div className=" flex font-light text-sm items-center justify-center ">
                    <UilTemperature size={18} className="mr-1"   />
                    Real Fell:
                    <span className=" font-medium ml-1 "> {`${this.state.feels_like.toFixed()}°`}
                    </span>
                </div>

                <div className=" flex font-light text-sm items-center justify-center ">
                    <UilTear size={18} className='mr-1 '    />
                    Humidity:
                    <span className=" font-medium ml-1 "> {`${this.state.humidity.toFixed()}%`}
                    </span>
                </div>

                <div className=" flex font-light text-sm items-center justify-center ">
                    <UilWind size={18} className='mr-1 '    />
                    Wind:
                    <span className=" font-medium ml-1 "> {`${this.state.speed.toFixed()}kmph`}
                    </span>
                </div>

            </div>
        </div>

        </div>
            </InfoWindow>
          </CurrentLocation>
        );
      }
    
}
export default GoogleApiWrapper({
       apiKey:('AIzaSyAoy3dniRWapyK4suIeIMJoSYxbmKQxGzo')
})(MapContainer2)