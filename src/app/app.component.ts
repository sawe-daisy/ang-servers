import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';

  serverElements= [{ type:'server', name: 'Testserver', content:'Just a test'}];
  onServerAdded(serverData:{serverName:string, serverContent:string }){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'blueprints',
      name:serverData.serverName,
      content:serverData.serverContent
    });

    console.log(serverData.serverContent)
  }
}
