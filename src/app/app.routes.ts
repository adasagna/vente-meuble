import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { NosProduitsComponent } from './pages/nos-produits/nos-produits.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BoutiqueComponent } from './pages/boutique/boutique.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'accueil', pathMatch: 'full'
    },
    {
        path:'accueil',
        component:AccueilComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'historique',
        component:HistoriqueComponent
    },
    {
        path:'boutique',
        component:BoutiqueComponent
    },
    {
        path:'nos-produits',
        component:NosProduitsComponent
    },
];
