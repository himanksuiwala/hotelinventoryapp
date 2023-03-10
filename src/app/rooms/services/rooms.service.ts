import { AppConfig } from './../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from './../../AppConfig/appconfig.service';
import { RoomList } from './../rooms';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  static getRooms(): RoomList[] {
    throw new Error('Method not implemented.');
  }
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('ROOM service init');
    console.log(this.config.apiEndpoint);
  }
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      rootType: 'DELUXE ROOM',
      amenities: 'Air Conditioned, Wi-fi, Breakfast',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkInTime: new Date('06-Mar-2034'),
      checkOutTime: new Date('07-Mar-2023'),
      rating: 5.0,
    },
    {
      roomNumber: 2,
      rootType: 'Semi-DELUXE ROOM',
      amenities: 'Air Conditioned, Wi-fi, Breakfast',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkInTime: new Date('06-Mar-2034'),
      checkOutTime: new Date('07-Mar-2023'),
      rating: 3.61233,
    },
    {
      roomNumber: 3,
      rootType: 'Basic ROOM',
      amenities: 'Air Conditioned, Wi-fi, Breakfast',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkInTime: new Date('06-Mar-2034'),
      checkOutTime: new Date('07-Mar-2023'),
      rating: 4.1,
    },
  ];
  getRooms() {
    return this.roomList;
  }
}
