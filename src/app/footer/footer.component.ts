import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
//   /* Animation for footer  */
ngAfterViewInit() {
  var footer = document.getElementsByTagName("footer")[0];


  window.addEventListener("scroll",function(){
      var footerPosition = footer.getBoundingClientRect().top;
      if (footerPosition <= window.innerHeight) {
          footer.classList.add('show');
        }
        else{
          footer.classList.remove('show');
        }
  })
    }
}
