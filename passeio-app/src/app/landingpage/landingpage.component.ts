import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  // Autenticado || Não autenticado
  profile: Profile | undefined;

  constructor(private router: Router) {}

  navegar() {
    this.router.navigate(['/paginas/galeria'])
  }

  logarComGoogle() {

  }

  isLoggedIn(): boolean {
    return !!this.profile;
  }
}
