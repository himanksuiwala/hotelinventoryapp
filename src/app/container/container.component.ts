import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  ContentChild,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick&Morty';
  }
}
