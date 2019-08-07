import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import { ApiService } from '../../core/service/api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {dtoToTerminal, terminalToDto} from '../../core/model/terminal.model';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  terminals;
  selectedTerminal;
  selectedTerminalId;
  terminalGroups;
  editForm: FormGroup;
  takeChoices: any;
  selectedTerminalGroup;
  allAllowedLanguages = [];
  allowedLanguagesSettings = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.takeChoices = this.dataService.getTakeChoices();

    this.allAllowedLanguages = this.dataService.getAllAllowedLanguages();

    this.allowedLanguagesSettings = {
      itemsShowLimit: 1,
      noDataAvailablePlaceholderText: 'нет данных'
    };

    this.editForm = this.formBuilder.group({
      terminalId: ['', Validators.required],
      groupNumber: ['', Validators.required],
      configChanged: [''],
      dateTimeInit: [''],
      legalName: [''],
      geoPosition: [''],
      limitMc: [''],
      limitProstir: [''],
      limitVisa: [''],
      manual: [''],
      mcAccepted: [''],
      opPurchase: [''],
      opRefund: [''],
      opReversal: [''],
      pin: [''],
      prostirAccepted: [''],
      receiptTemplate: [''],
      visaAccepted: [''],
      merchantId: [''],
      merchantName: [''],
      merchantLocation: [''],
      taxId: [''],
      mcc: [''],
      acquirerId: [''],
      allowedLanguages: [''],
      beginMask: ['', Validators.required],
      endMask: ['', Validators.required],
      maskSymbol: ['', Validators.required]
    });

    /**
     * PROD. Profile
     */
    this.apiService.findAllTerminals()
      .subscribe( data => {
        console.log(data)
        const anyData: any = data
        const terminals = anyData
        this.terminals = terminals.content;
        },
        error => {
          alert( JSON.stringify(error) );
        });

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
    // this.terminals = this.dataService.findAllTerminals().content;
  }

  public selectTerminal(terminal) {
    console.log(terminal);
    this.selectedTerminal = terminal;
    const entity: any = dtoToTerminal(terminal);
    this.editForm.setValue(entity);
  }

  public selectTerminalId(terminal) {
    if (this.selectedTerminalId === terminal.terminalId) {
      this.selectTerminal(terminal);
    } else {
      this.selectedTerminalId = terminal.terminalId;
    }
  }

  onItemSelect(item: any) {
  }

  onSelectAll(items: any) {
  }

  public selectTerminalGroupByNumber(groupNumber) {
    for (let i = 0; i < this.terminalGroups.length; i++) {
      if (this.terminalGroups[i].groupNumber==groupNumber) this.selectedTerminalGroup = this.terminalGroups[i];
    }
  }

  onSubmit() {
    const dto = terminalToDto(this.editForm.value);
    this.apiService.updateTerminal(dto)
      .pipe(first())
      .subscribe(
        data => {
          this.pageRefresh(); // updated successfully.
        },
        error => {
          alert( JSON.stringify(error) );
        });
  }

  public closeTerminal() {
    this.selectedTerminal = null;
  }

  public closeTerminalGroupByNumber() {
    this.selectedTerminalGroup = null;
  }

  public pageRefresh() {
    location.reload();
  }
}
