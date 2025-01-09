import { Component } from '@angular/core';
import { HeaderComponent } from '../../menu/header/header.component';
import { FooterComponent } from '../../menu/footer/footer.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
