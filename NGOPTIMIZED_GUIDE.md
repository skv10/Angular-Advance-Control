# NgOptimizedImage Directive - Complete Guide

The `NgOptimizedImage` directive is Angular's built-in solution for optimizing image loading performance. It provides automatic optimizations and best practices for web performance.

## Key Features Demonstrated

### 1. **Required Attributes**
```html
<img ngSrc="image.jpg" width="400" height="300" alt="Description">
```
- `ngSrc`: Replaces `src` attribute
- `width` & `height`: Required for layout stability (prevents CLS)
- `alt`: Required for accessibility

### 2. **Priority Loading**
```html
<img ngSrc="hero-image.jpg" width="800" height="600" alt="Hero" priority>
```
- Use `priority` for above-the-fold images
- Optimizes Largest Contentful Paint (LCP)
- Preloads the image resource

### 3. **Placeholder Support**
```html
<img ngSrc="main.jpg" placeholder="blur-data-url" width="400" height="300" alt="Image">
```
- Shows low-quality placeholder while loading
- Improves perceived performance
- Can use base64 encoded blur images

### 4. **Responsive Images**
```html
<img ngSrc="responsive.jpg" 
     width="800" height="600" 
     sizes="(max-width: 768px) 100vw, 50vw" 
     alt="Responsive">
```
- `sizes` attribute defines responsive breakpoints
- Browser selects appropriate image size
- Reduces bandwidth usage

### 5. **Fill Mode**
```html
<div style="position: relative; width: 400px; height: 300px;">
  <img ngSrc="fill-image.jpg" fill sizes="400px" alt="Fill mode">
</div>
```
- Image fills parent container
- Parent must have `position: relative`
- Useful for dynamic container sizes

### 6. **Loading Strategies**
```html
<!-- Lazy loading (default) -->
<img ngSrc="lazy.jpg" width="400" height="300" alt="Lazy">

<!-- Eager loading -->
<img ngSrc="eager.jpg" width="400" height="300" alt="Eager" loading="eager">
```
- Default: Lazy loading for performance
- Eager: Loads immediately (use sparingly)

### 7. **Error Handling**
```html
<img ngSrc="might-fail.jpg" 
     width="400" height="300" 
     alt="Image" 
     (error)="onImageError($event)">
```
- Handle loading failures gracefully
- Provide fallback mechanisms

## Performance Benefits

### Automatic Optimizations:
1. **Lazy Loading**: Images load when entering viewport
2. **Preconnect**: Establishes early connections to image domains
3. **Srcset Generation**: Creates responsive image variants
4. **Format Selection**: Serves modern formats (WebP, AVIF) when supported
5. **Size Optimization**: Prevents oversized image downloads

### Core Web Vitals Impact:
- **LCP**: Priority loading for hero images
- **CLS**: Required dimensions prevent layout shifts
- **FCP**: Placeholder images improve perceived performance

## Best Practices

### 1. **Use Priority Wisely**
```html
<!-- Good: Hero image above fold -->
<img ngSrc="hero.jpg" priority width="800" height="400" alt="Hero">

<!-- Bad: Multiple priority images -->
<img ngSrc="image1.jpg" priority>
<img ngSrc="image2.jpg" priority> <!-- Don't do this -->
```

### 2. **Proper Sizing**
```html
<!-- Good: Exact dimensions -->
<img ngSrc="photo.jpg" width="400" height="300" alt="Photo">

<!-- Bad: CSS-only sizing -->
<img ngSrc="photo.jpg" style="width: 400px; height: 300px;" alt="Photo">
```

### 3. **Responsive Design**
```html
<!-- Good: Responsive with sizes -->
<img ngSrc="responsive.jpg" 
     width="800" height="600"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     alt="Responsive">
```

### 4. **Fill Mode Setup**
```html
<!-- Good: Proper container -->
<div class="image-container">
  <img ngSrc="fill.jpg" fill sizes="400px" alt="Fill">
</div>

<style>
.image-container {
  position: relative;
  width: 400px;
  height: 300px;
}
</style>
```

## Common Patterns

### Image Gallery
```html
<div class="gallery">
  <img *ngFor="let image of images" 
       [ngSrc]="image.url" 
       [width]="image.width" 
       [height]="image.height" 
       [alt]="image.alt">
</div>
```

### Hero Section
```html
<section class="hero">
  <img ngSrc="hero-bg.jpg" 
       priority 
       fill 
       sizes="100vw" 
       alt="Hero background">
</section>
```

### Product Images
```html
<img [ngSrc]="product.imageUrl" 
     [width]="product.imageWidth" 
     [height]="product.imageHeight" 
     [placeholder]="product.placeholderUrl"
     [alt]="product.name">
```

## Migration from Regular img

### Before:
```html
<img src="image.jpg" alt="Description">
```

### After:
```html
<img ngSrc="image.jpg" width="400" height="300" alt="Description">
```

## Development Warnings

The directive provides helpful warnings in development:
- Missing width/height attributes
- Oversized images
- Missing alt text
- Incorrect priority usage
- Invalid fill mode setup

## Browser Support

- Modern browsers with native lazy loading
- Fallback for older browsers
- Progressive enhancement approach
- Works with all image formats

## Performance Monitoring

Monitor these metrics:
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Image loading times
- Bandwidth usage

The NgOptimizedImage directive automatically optimizes for these metrics when used correctly.