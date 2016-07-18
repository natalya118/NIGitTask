import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { HeroService }        from './hero.service';

@Component({
  selector: 'my-app',

  template: `
  
  <div class ="container">
        <div class="col-sm-9">

    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Go back to the Store</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active" class="cart-link">Go to cart</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
        
        </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService,
  ]
})
export class AppComponent {
  title = 'Arduino Store';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/