import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  flag:boolean = true;
  modelSrc:string =""
  srcs : string[] = [
    '../../assets/images/p1.png',
    '../../assets/images/p2.png',
    '../../assets/images/p3.png',
    '../../assets/images/p1.png',
    '../../assets/images/p2.png',
    '../../assets/images/p3.png',
  ]
}
