import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';
import {
  Component,
  ViewChildren,
  QueryList,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'hotelinventosdfsfryapp';
  loginType = 'Admin';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberofRooms = 56;
  }

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = 'HILTON HOTEL';
  }
}
