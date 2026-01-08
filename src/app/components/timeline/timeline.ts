import { Component } from '@angular/core';

import { workOrders } from './timeline.store';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
  workOrders = workOrders;
}
