import { Component, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';



@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnChanges {


  @Input() isExpanded = true;

  collapse() {
    this.isExpanded = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes['isExpanded'];
    this.isExpanded = change.currentValue;

  }



}
