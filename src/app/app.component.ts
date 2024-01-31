import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkerService } from './excell-refactor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'refactor-excell';

  result: any;

  constructor(private workerService: WorkerService) { }

  async runWorker() {
    const data = 5;
    this.result = await this.workerService.runTask(data);
  }
}
