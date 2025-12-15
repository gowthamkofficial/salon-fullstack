import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  standalone: false,
})
export class HeroComponent implements OnInit, OnDestroy {
  // Salon name will be set dynamically
  salonName = 'SAM Salon & Spa';
  isTypingComplete = false;
  private currentNameIndex = 0;
  private typingTimeout: any;
  private changeNameTimeout: any;
  
  // Salon name options
  salonNames = [
    'SAM Salon & Spa'
  ];

  // SVG Background URLs
  patternUrl: string =
    'url(\'data:image/svg+xml;charset=utf-8,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ef4444" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')';

  constructor() {}

  ngOnInit(): void {
    // Start typing animation when component loads
    // this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    // Clear any timeouts when component is destroyed
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    if (this.changeNameTimeout) {
      clearTimeout(this.changeNameTimeout);
    }
  }

  // Start the typing animation cycle
  startTypingAnimation(): void {
    this.typeName(0);
  }

  // Type out a name character by character
  typeName(charIndex: number): void {
    const name = this.salonNames[this.currentNameIndex];
    
    if (charIndex < name.length) {
      this.salonName = name.substring(0, charIndex + 1);
      this.isTypingComplete = false;
      
      this.typingTimeout = setTimeout(() => {
        this.typeName(charIndex + 1);
      }, 100); // Speed of typing (100ms per character)
    } else {
      this.isTypingComplete = true;
      
      // Wait 3 seconds, then move to next name
      this.changeNameTimeout = setTimeout(() => {
        this.currentNameIndex = (this.currentNameIndex + 1) % this.salonNames.length;
        this.deleteName(name.length);
      }, 3000);
    }
  }

  // Delete name character by character
  deleteName(charIndex: number): void {
    if (charIndex > 0) {
      this.salonName = this.salonNames[this.currentNameIndex - 1].substring(0, charIndex - 1);
      this.isTypingComplete = false;
      
      this.typingTimeout = setTimeout(() => {
        this.deleteName(charIndex - 1);
      }, 50); // Speed of deleting (50ms per character)
    } else {
      // Start typing the next name
      this.typeName(0);
    }
  }

  // Alternative simpler typing animation (without deleting)
  startSimpleTyping(): void {
    const name = this.salonNames[this.currentNameIndex];
    let i = 0;
    
    const typeChar = () => {
      if (i < name.length) {
        this.salonName += name.charAt(i);
        i++;
        this.isTypingComplete = false;
        
        this.typingTimeout = setTimeout(typeChar, 100);
      } else {
        this.isTypingComplete = true;
        
        // Move to next name after delay
        this.changeNameTimeout = setTimeout(() => {
          this.currentNameIndex = (this.currentNameIndex + 1) % this.salonNames.length;
          this.salonName = '';
          this.startSimpleTyping();
        }, 3000);
      }
    };
    
    typeChar();
  }

  // Method to manually trigger typing animation (for testing)
  triggerTyping(): void {
    this.salonName = '';
    this.currentNameIndex = Math.floor(Math.random() * this.salonNames.length);
    this.startTypingAnimation();
  }
}

// Keep your existing interfaces here...
interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: string;
  features: Feature[];
}

interface Feature {
  icon: string;
  text: string;
  tagline: string;
}

interface TodayStats {
  availableSlots: string | number;
  nextAvailableTime: string;
  trendingService: string;
}

interface ExclusiveOffer {
  title: string;
  discount: string;
  code: string;
}