import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'juan david';
  public nameUpper: string = 'JUAN DAVID';
  public fullName: string = 'jUAn GiL';

  public customDate: Date = new Date();

}
