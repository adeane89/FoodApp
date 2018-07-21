import { Component, OnInit, Input } from '@angular/core';
import { MealModel } from '../meal-model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    tab: number;
    show: boolean=false;

    @Input()
    meal: MealModel;
  constructor() {
  }

  ngOnInit() {
  }

	setTab(selectedTab: number){
		this.tab = selectedTab;
        this.show = !this.show;
	}
}
