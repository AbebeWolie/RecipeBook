import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string='';
  namee = [];
  delItem;
  loadedFeature = 'recipe'
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }

  onUpdate(event:Event){
    this.name = (<HTMLInputElement>event.target).value
  }


}
