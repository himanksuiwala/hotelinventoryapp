import { RoomsService } from './../rooms/services/rooms.service';
import { Component, OnInit, Self } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  constructor(@Self() private RoomsService: RoomsService) {}
  ngOnInit(): void {}
  empName: string = 'Himank';
}
