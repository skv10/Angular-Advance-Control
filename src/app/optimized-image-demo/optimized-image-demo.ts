import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimized-image-demo',
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image-demo.html',
  styleUrl: './optimized-image-demo.scss',
})
export class OptimizedImageDemo {
  imageUrl = 'https://picsum.photos/800/600';
  placeholderUrl = 'https://picsum.photos/20/15';

  onImageError(event: Event) {
    console.log('Image failed to load:', event);
  }
}
