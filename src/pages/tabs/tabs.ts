import { Component } from '@angular/core';

import { InputPage } from '../input/input';
import { GraphPage } from '../graph/graph';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InputPage;
  tab2Root = GraphPage;
  tab3Root = TutorialPage;

  constructor() {

  }
}
