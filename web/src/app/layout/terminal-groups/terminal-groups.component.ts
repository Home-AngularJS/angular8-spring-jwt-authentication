import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-terminal-groups',
  templateUrl: './terminal-groups.component.html',
  styleUrls: ['./terminal-groups.component.css']
})
export class TerminalGroupsComponent implements OnInit {

  terminalGroups;
  selectedTerminalGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    // this.terminalGroups = this.dataService.getTerminalGroups();
    this.apiService.getTerminalGroups()
      .subscribe( data => {
        console.log(data)
        const anyData: any = data
        const terminalGroups = anyData
        this.terminalGroups = terminalGroups;
      });

    this.dropdownList = [
      'UKR',
      'RUS',
      'ENG'
    ];
    this.selectedItems = [
      'UKR',
      'RUS',
      'ENG'
    ];
    this.dropdownSettings = {
      itemsShowLimit: 2,
      noDataAvailablePlaceholderText: 'нет данных'
    };
  }

  public selectTerminalGroup(terminalGroup){
    this.selectedTerminalGroup = terminalGroup;
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}

/**
 * @see https://youtu.be/1doIL1bPp5Q?t=448
 */

// interface Language {
//   languageId:string
// }
//
// interface Merchant {
//   merchantId:string,
//   legal_name:string,
//   merchantName:string,
//   merchantLocation:string,
//   taxId:number,
//   mcc:number,
//   acquirerId:number
// }

// interface Terminal {
//   terminalId:string,
//   groupNumber:number,
//   opPurchase:string,
//   opReversal:string,
//   opRefund:string,
//   manual:string,
//   pin:string,
//   geoPosition:string,
//   limitVisa:number,
//   limitMc:number,
//   limitProstir:number,
//   visaAccepted:string,
//   mcAccepted:string,
//   prostirAccepted:string,
//   receiptTemplate:string,
//   configChanged:string,
//   merchant:Merchant,
//   allowedLanguages:[Language]
// }
