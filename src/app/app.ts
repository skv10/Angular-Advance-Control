import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptimizedImageDemo } from './optimized-image-demo/optimized-image-demo';
import { ComparisonComponent } from './comparison.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OptimizedImageDemo, ComparisonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularadvancecontrol');
}
