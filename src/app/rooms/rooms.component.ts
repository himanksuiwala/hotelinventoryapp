import { HeaderComponent } from './../header/header.component';
import {
  Component,
  OnInit,
  DoCheck,
  OnChanges,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnDestroy,
  SkipSelf,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  // providers: [RoomsService],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  roomList: RoomList[] = [];

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
    // this.roomList = [
    //   {
    //     roomNumber: 1,
    //     rootType: 'DELUXE ROOM',
    //     amenities: 'Air Conditioned, Wi-fi, Breakfast',
    //     price: 500,
    //     photos:
    //       'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     checkInTime: new Date('06-Mar-2034'),
    //     checkOutTime: new Date('07-Mar-2023'),
    //     rating: 5.0,
    //   },
    //   {
    //     roomNumber: 2,
    //     rootType: 'Semi-DELUXE ROOM',
    //     amenities: 'Air Conditioned, Wi-fi, Breakfast',
    //     price: 500,
    //     photos:
    //       'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     checkInTime: new Date('06-Mar-2034'),
    //     checkOutTime: new Date('07-Mar-2023'),
    //     rating: 3.61233,
    //   },
    //   {
    //     roomNumber: 3,
    //     rootType: 'Basic ROOM',
    //     amenities: 'Air Conditioned, Wi-fi, Breakfast',
    //     price: 500,
    //     photos:
    //       'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //     checkInTime: new Date('06-Mar-2034'),
    //     checkOutTime: new Date('07-Mar-2023'),
    //     rating: 4.1,
    //   },
    // ];
  }

  //ViewChild returns the single referred DOM element
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  //ViewChildren returns the list of element reference
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  //ngDoCheck() is invoked everytime we raise any event (works all-around the app)
  ngDoCheck(): void {
    // console.log('On Changes is Called');
  }

  ngAfterViewInit() {
    this.headerChildrenComponent.last.title = 'The Grand Nottin Hill Resort';
    this.headerChildrenComponent.last.location_address =
      'Near Hyderabad House, Dhaula Kuan, New Delhi(IN)';
  }
  // hotelName = 'Hilton Hotel';

  numberofRooms = 10;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 5,
    bookedRooms: 5,
  };
  title = 'Available Rooms';
  address = 'Dhaula Kuan, New Delhi(IN)';
  selectedRoom!: RoomList;
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      rootType: 'Dorm',
      amenities: 'Air Conditioned, Wi-fi, Breakfast',
      price: 250,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkInTime: new Date('07-Mar-2034'),
      checkOutTime: new Date('08-Mar-2023'),
      rating: 2.4,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]; //principle of immutablity
  }
  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
}
