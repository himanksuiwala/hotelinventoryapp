import { RoomList, Room } from './../rooms';
import {
  Component,
  EventEmitter,
  SimpleChanges,
  OnInit,
  OnChanges,
  Input,
  Output,
  ChangeDetectionStrategy,
  SimpleChange,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'hinv-rooms-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() address: string = '';
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  //ngOnChanges can only be used in components using @Input as property, and get new value
  //Simple Changes gives the meta data about changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('ONDEFSTRY CALLED');
  }
  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
