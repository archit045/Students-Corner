import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slideIndex = 0;
  slideOffset = 0;
  slideWidth = 300; // Adjust this based on your slide item width

  prevSlide() {
    this.slideIndex = Math.max(0, this.slideIndex - 1);
    this.slideOffset = -this.slideIndex * this.slideWidth;
  }

  nextSlide() {
    // Adjust the condition based on the total number of slides
    if (this.slideIndex < 2) {
      this.slideIndex++;
      this.slideOffset = -this.slideIndex * this.slideWidth;
    }
  }

}
