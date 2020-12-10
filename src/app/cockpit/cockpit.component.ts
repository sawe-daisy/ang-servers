import { Component, OnInit, EventEmitter, Output , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName:string, serverContent:string }>();
  @Output('bpcreated') blueprintCreated= new EventEmitter<{serverName:string, serverContent:string }>()

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  newServerName='';
  newServerContent='';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverContent: HTMLInputElement){
    this.serverCreated.emit({serverName:serverContent.value, 
      serverContent:this.serverContentInput.nativeElement.value});
  }
  onAddBlueprint(serverContent: HTMLInputElement){
    this.blueprintCreated.emit({serverName:serverContent.value, 
      serverContent:this.serverContentInput.nativeElement.value
    });
      console.log(this.newServerContent)
  }

}
