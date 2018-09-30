import { Component } from '@angular/core';

import { AboutPage } from '../SignUp/about';
import { HomePage } from '../Login/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;

  constructor() {

  }
}
