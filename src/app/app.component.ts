import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, ToggleButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
  cars = [
    { vin: 'A123', year: 2015, brand: 'Toyota', color: 'Red' },
    { vin: 'B456', year: 2016, brand: 'Honda', color: 'Blue' },
    { vin: 'C789', year: 2017, brand: 'Ford', color: 'Black' }
  ];
}
