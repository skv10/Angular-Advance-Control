import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-comparison',
  imports: [NgOptimizedImage],
  template: `
    <div class="comparison">
      <h2>Regular IMG vs NgOptimizedImage</h2>
      
      <section>
        <h3>1. Basic Comparison</h3>
        <div class="side-by-side">
          <div>
            <h4>Regular IMG</h4>
            <img src="https://picsum.photos/400/300" 
                 width="400" height="300" alt="Regular image">
            <p>❌ No optimizations</p>
          </div>
          <div>
            <h4>NgOptimizedImage</h4>
            <img ngSrc="https://picsum.photos/400/300" 
                 width="400" height="300" 
                 alt="Optimized image">
            <p>✅ Automatic optimizations</p>
          </div>
        </div>
      </section>

      <section>
        <h3>2. Lazy Loading Test</h3>
        <div style="height: 50vh; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
          <p>Scroll down to see lazy loading...</p>
        </div>
        
        <div class="side-by-side">
          <div>
            <h4>Regular IMG (loads immediately)</h4>
            <img src="https://picsum.photos/300/200?random=1" 
                 width="300" height="200" alt="Regular image">
          </div>
          <div>
            <h4>NgOptimizedImage (lazy loads)</h4>
            <img ngSrc="https://picsum.photos/300/200?random=2" 
                 width="300" height="200" alt="Optimized image">
          </div>
        </div>
      </section>

      <section>
        <h3>3. Priority Loading</h3>
        <div class="side-by-side">
          <div>
            <h4>Regular IMG</h4>
            <img src="https://picsum.photos/500/300?random=3" 
                 width="500" height="300" alt="Regular image">
          </div>
          <div>
            <h4>NgOptimizedImage with Priority</h4>
            <img ngSrc="https://picsum.photos/500/300?random=4" 
                 width="500" height="300" 
                 priority
                 alt="Priority optimized image">
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .comparison { max-width: 1200px; margin: 0 auto; padding: 20px; }
    .side-by-side { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
    section { margin: 40px 0; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
    img { border: 2px solid #ddd; border-radius: 4px; max-width: 100%; }
    h3 { color: #333; }
    h4 { color: #666; margin-bottom: 10px; }
  `]
})
export class ComparisonComponent {}