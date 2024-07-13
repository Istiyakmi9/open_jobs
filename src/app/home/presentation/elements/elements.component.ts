import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-elements',
    templateUrl: './elements.component.html',
    styleUrls: ['./elements.component.scss'],
    standalone: true,
    imports: [FormsModule, RouterLink]
})
export class ElementsComponent {

}
