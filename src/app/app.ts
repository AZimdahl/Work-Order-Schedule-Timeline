import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { WorkCenters } from "./components/work-centers/work-centers";
import { Timeline } from "./components/timeline/timeline";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, WorkCenters, Timeline],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Work-Order-Schedule-Timeline');
}
