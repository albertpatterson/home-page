import { Component, OnInit } from '@angular/core';

function getSearchParams(): any{
  
  let params = {};

  location.search
  .slice(1)
  .split("&")
  .map((query:string)=>{
      let [name, value] = query.split("=");
      params[name]=value;
  });

  return params;
}

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // constructor(private activatedRoute: ActivatedRoute) { }
  constructor() { }
  
  ngOnInit() {
    let demo = getSearchParams().demo;
    if(demo){
      switch(demo.toLowerCase()){
        case 'weather':
          setTimeout(()=>document.getElementById("weatherWidgetDemoCollapseButton").click(), .3e3);
          break;
        case 'animation':
        setTimeout(()=>document.getElementById("animationsAndTransitionsDemoCollapseButton").click(), .3e3);
          break;
      }
    }
  }
}
