import { Component, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartLine, faBuilding, faFileContract, faShower, faKitchenSet,faWarehouse, faPersonShelter, faUserShield, 
    faPeopleRoof, faUserGear  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnChanges {

    myFaFileContract : any;
    myFaBuilding: any;
    myFaShower: any;
    myFaKitchenSet : any;
    myFaWarehouse: any;
    myFaPersonShelter: any;
    myFaUserShield: any;
    myFaPeopleRoof: any;
    myfaUserGear: any;
    myfaChartLine: any;

    @Input() isExpanded = true;

constructor() {
    
    // library.add(faBuilding, faFileContract);
    this.myFaFileContract = faFileContract;
    this.myFaBuilding = faBuilding;
    this.myFaShower = faShower;
    this.myFaKitchenSet = faKitchenSet;
    this.myFaWarehouse = faWarehouse;
    this.myFaPersonShelter = faPersonShelter;
    this.myFaUserShield = faUserShield;
    this.myFaPeopleRoof = faPeopleRoof;
    this.myfaUserGear = faUserGear;
    this.myfaChartLine = faChartLine;
}   

collapse() {
    this.isExpanded = false;
}

  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes['isExpanded'];
    this.isExpanded = change.currentValue;

  }



}
