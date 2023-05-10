import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openResume(){
    window.open('https://drive.google.com/file/d/1_KuSd5Di2KRhhPWDh1g7DAU5FgF2EfX6/view?usp=share_link');
  }

}
