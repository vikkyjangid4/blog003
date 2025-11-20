// Re-export image utilities for backward compatibility
// Dynamic BASE_URL - supports both localhost and production
export const BASE_URL = (() => {
  // Use environment variable if set
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  
  // In browser environment, detect if localhost or production
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:8000';
    }
    // Production domain
    return 'https://boganto.com';
  }
  
 // Server-side fallback
  return process.env.NEXT_PUBLIC_API_BASE_URL || "https://boganto.com";
})();

// Default images for the application
export const DEFAULT_IMAGES = {
  BLOG_BANNER: '/uploads/1758873063_a-book-1760998_1280.jpg',
  HERO_BANNER: '/uploads/1758801057_a-book-759873_640.jpg',
  ARTICLE_THUMBNAIL: '/uploads/1758801057_book-419589_640.jpg',
  BUILDING_LIBRARY: '/uploads/1758779936_a-book-1760998_1280.jpg'
};

// Kept for backward compatibility
export const API_BASE_URL = BASE_URL;