import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {

  public nameLower: string = 'juan david';
  public nameUpper: string = 'JUAN DAVID';
  public fullName: string = 'jUaN DAvId gIl';

}
