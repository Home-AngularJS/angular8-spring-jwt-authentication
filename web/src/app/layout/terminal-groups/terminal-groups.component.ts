import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ApiService} from '../../core/service/api.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-terminal-groups',
  templateUrl: './terminal-groups.component.html',
  styleUrls: ['./terminal-groups.component.css']
})
export class TerminalGroupsComponent implements OnInit {

  terminalGroups;
  selectedTerminalGroup;
  selectedTerminalGroupNumber;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  editForm: FormGroup;
  takeChoices: any;
  newTerminalGroup: any;


  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.takeChoices = this.dataService.getTakeChoices();

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
      itemsShowLimit: 1,
      noDataAvailablePlaceholderText: 'нет данных'
    };

    this.newTerminalGroup = {
      "groupNumber": null,
      "groupName": null,
      "opPurchase": null,
      "opReversal": null,
      "opRefund": null,
      "manual": null,
      "pin": null,
      "geoPosition": null,
      "limitVisa": null,
      "limitMc": null,
      "limitProstir": null,
      "visaAccepted": null,
      "mcAccepted": null,
      "prostirAccepted": null,
      "receiptTemplate": null,
      "allowedLanguages": []
    };

    this.editForm = this.formBuilder.group({
      groupNumber: ['', Validators.required],
      groupName: ['', Validators.required],
      opPurchase: [''],
      opReversal: [''],
      opRefund: [''],
      manual: [''],
      pin: [''],
      geoPosition: [''],
      limitVisa: [''],
      limitMc: [''],
      limitProstir: [''],
      visaAccepted: [''],
      mcAccepted: [''],
      prostirAccepted: [''],
      receiptTemplate: [''],
      allowedLanguages: ['']
    });

    /**
     * PROD. Profile
     */
    this.apiService.findAllServiceGroups()
      .subscribe( data => {
        console.log(data)
        const anyData: any = data
        const terminalGroups = anyData
        this.terminalGroups = terminalGroups;
        },
        error => {
          alert( JSON.stringify(error) );
        });

    /**
     * DEV. Profile
     */
    // this.terminalGroups = this.dataService.findAllServiceGroups();
  }

  public selectTerminalGroup(terminalGroup) {
    this.selectedTerminalGroup = terminalGroup;
    console.log(terminalGroup)
    this.editForm.setValue(terminalGroup);
  }

  public selectTerminalGroupNumber(terminalGroup) {
    if (this.selectedTerminalGroupNumber === terminalGroup.groupNumber) {
      this.selectTerminalGroup(terminalGroup);
    } else {
      this.selectedTerminalGroupNumber = terminalGroup.groupNumber;
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit() {
    this.apiService.updateServiceGroup(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          location.reload(); // updated successfully.
        },
        error => {
          alert( JSON.stringify(error) );
        });
  }

  public pageRefresh() {
    location.reload();
  }

  public createTerminalGroup() {
    this.selectedTerminalGroup = this.newTerminalGroup;
    console.log(this.newTerminalGroup)
    this.editForm.setValue(this.newTerminalGroup);
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
