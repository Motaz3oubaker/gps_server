import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { DeletePositionsService } from './services/delete-positions.service';
import { LocationService } from './services/location.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'worldmap';
  data_1: any = [];
  map!: mapboxgl.Map;

  //style = 'mapbox://styles/mapbox/satellite-streets-v11';
  style = 'mapbox://stylee/mapbox/streets-v11';
  //style = 'mapbox://styles/mapbox/dark-v10'
  //style = 'mapbox://styles/mapbox/light-v10'
  //style = 'mapbox://styles/mapbox/satellite-streets-v11'

  constructor(private LocationService: LocationService,private DeletePositionsService: DeletePositionsService) {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoibWFoZW5kcmE5MzI5IiwiYSI6ImNrcHpld25pNzBsdGEycG82aTh2NjI0YnAifQ.AD4EUC9iCaDZMT36sNq50w';
  }

  ngOnInit(){

    
    this.buildMap();
    
  }

  

  buildMap() {


    this.LocationService.GetAllPositions().subscribe(
      (res) => {
        
        this.data_1 = res;
        var indexOflastElement = this.data_1.length - 1;
        var lastElement = this.data_1[indexOflastElement];
        var firstElement = this.data_1[0];
        //Source Marker  
        const source = new mapboxgl.Marker({ color: 'red', draggable: false }).setLngLat(firstElement)
          .setPopup(new mapboxgl.Popup().setHTML("<h1>Source</h1>")) // add popup
          .addTo(this.map);
        //Live Position Marker  
        const destination = new mapboxgl.Marker({ color: '#37E2D5', draggable: false }).setLngLat(lastElement)
          .setPopup(new mapboxgl.Popup().setHTML("<h1>Live Position</h1>")) // add popup
          .addTo(this.map);
  
        var setBounds = new mapboxgl.LngLatBounds(firstElement, lastElement);
        // zoom in the beginning between these two points
        this.map.fitBounds(setBounds, { padding: 50 });
      }
    )



    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [9.417942, 34.653693],
      zoom: 1,


    });
    this.map.on('load', () => {
      this.map.addSource('source', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: this.data_1
          }
        }
      });

      this.map.addLayer({
        id: 'source',
        type: 'line',
        source: 'source',
        //the property's of the line
        layout: {
          "line-join": 'round',
          "line-cap": 'round'
        },
        paint: {
          "line-color": '#33ADFF',
          "line-width": 4
        }
      });
    });
    //Controllers
    this.map.addControl(new mapboxgl.ScaleControl(), "top-left");
    this.map.addControl(new mapboxgl.FullscreenControl(), "top-right");  
    this.map.addControl(new mapboxgl.NavigationControl(), "top-right");  





  }
  //Reset func oncilck
  Reset(){
    
    this.DeletePositionsService.delete(null).subscribe( )
   
  //   setTimeout(function(){
  //     window.location.reload();
  //  }, 250);
}
reload(){
  
  
      window.location.reload();
  
}


}
