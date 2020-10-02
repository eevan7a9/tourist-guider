import { Component, OnInit } from '@angular/core';
// import { mapItems } from '../../../assets/dummy-data/dummy-items.js';
import { MapMarker } from 'src/app/models/MapMarker';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-map-items',
  templateUrl: './map-items.component.html',
  styleUrls: ['./map-items.component.scss'],
})
export class MapItemsComponent implements OnInit {
  p: number = 1;
  mapItems: Observable<MapMarker[]>;

  constructor(private store: Store<{ mapMarkers: MapMarker[] }>) {}

  ngOnInit(): void {
    this.mapItems = this.store.select('mapMarkers');
    // this.mapItems.subscribe((e) => console.log(e));
  }
}