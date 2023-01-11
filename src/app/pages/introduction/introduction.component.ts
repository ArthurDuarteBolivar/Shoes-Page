import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
src : string = "/assets/imgs/shoes.png"

  radio1(){
    this.src = "/assets/imgs/shoes.png"
  }
  radio2(){
    this.src = "/assets/imgs/shoes1.png"
  }
  radio3(){
    this.src = "/assets/imgs/shoes2.png"
  }
}
