import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName='';
  newServerContent=';'

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(){
    this.serverElements.push({
      type:'server',
      name:this.newServerName,
      content: this.newServerContent
    });
  }
  onAddlueprint(){
    this.serverElements.push({
      type:'blueprints',
      name:this.newServerName,
      content: this.newServerContent
    });
  }

}
