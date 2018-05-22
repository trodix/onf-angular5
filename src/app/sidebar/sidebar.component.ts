import { Component, OnInit } from '@angular/core';
import { ChartService } from "../chart.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  checkedGenre = true;
  checkedEspece = true;
  checkedCommune = true;  

  constructor(private _chartService: ChartService) {
    console.log(this.checkedGenre);
    this._chartService.estVisible = this.checkedGenre;
    console.log("ok");
  }

  ngOnInit() {
  }

  cacher(el){
    document.getElementById(el).hidden ? document.getElementById(el).hidden = false : document.getElementById(el).hidden = true;
  }

  // AffichageGraph(el) {
  //   let parent = null;
  //   console.log(el);
  //   if (!el.ckecked) {
  //     parent = el.parentNode;
  //     el.parentNode.removeChild(el);
  //   }
  //   else {
  //     document.getElementById("chartContener").appendChild(parent);
  //   }
  // }

}
