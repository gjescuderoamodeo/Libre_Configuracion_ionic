import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.page.html',
  styleUrls: ['./ladder.page.scss'],
})
export class LadderPage implements OnInit {

  ladder: any[];

  constructor(public navCtrl: NavController) {

    this.ladder = [
    'Adelaide',
    'Collingwood',
    'Essendon',
    'Gold Coast',
    'EL PEPE'
    ];
    
    }//end_constructor
    
    reorderItems(indexes){
      //this.ladder = reorderArray(this.ladder, indexes);
      console.log(indexes);
    }
    
    onRenderItems(event) {
      //console.log(`Move item from ${event.detail.from} to ${event.detail.to}`);
      const draggedItem = this.ladder.splice(event.detail.from, 1)[0];
      this.ladder.splice(event.detail.to, 0, draggedItem);
      event.detail.complete();
      console.log(this.ladder);
    }
    
    ngOnInit() {
    }
    
    }//end_class
