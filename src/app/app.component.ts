import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos = [
    {
      url: 'https://www.aquitemplacas.com.br/img/produtos/g/36-atencao-area-de-teste.jpg',
      description: 'Other test',
    },
    {
      url: 'http://marcelotoledo.com/wp-content/uploads/2016/04/teste-ab-checklist.jpg',
      description: 'Test',
    },
  ];
}
