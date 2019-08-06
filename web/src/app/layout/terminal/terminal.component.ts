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

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.takeChoices = this.dataService.getTakeChoices();

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
      allowedLanguages: ['']
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
    this.selectedTerminal = terminal;
    this.selectedTerminalId = terminal.terminalId;

    console.log(terminal);
    const entity: any = dtoToTerminal(terminal);
    console.log(entity);

    this.editForm.setValue(entity);
  }

  public createTerminal() {
    const entity: any = {
      "terminalId": null,
      "groupNumber": null,
      "configChanged": null,
      "dateTimeInit": null,
      "legal_name": null,
      "geoPosition": null,
      "limitMc": null,
      "limitProstir": null,
      "limitVisa": null,
      "manual": null,
      "mcAccepted": null,
      "opPurchase": null,
      "opRefund": null,
      "opReversal": null,
      "pin": null,
      "prostirAccepted": null,
      "receiptTemplate": null,
      "visaAccepted": null,
      "merchantId": null,
      "merchantName": null,
      "merchantLocation": null,
      "taxId": null,
      "mcc": null,
      "acquirerId": null,
      "allowedLanguages": []
    };

    this.editForm.setValue(entity);
  }

  public selectTerminalGroupByNumber(groupNumber) {
    for (let i = 0; i < this.terminalGroups.length; i++) {
      console.log(JSON.stringify(this.terminalGroups[i]));
      if (this.terminalGroups[i].groupNumber==groupNumber) this.selectedTerminalGroup = this.terminalGroups[i];
    }
  }

  public closeTerminalGroupByNumber() {
    this.selectedTerminalGroup = null;
  }

  onSubmit() {
    console.log(this.editForm.value);
    const dto = terminalToDto(this.editForm.value);
    console.log(dto);

    /*
     * if (dto.terminalId != null) {
     *    this.apiService.updateTerminal(dto)
     * } else {
     *     this.apiService.createTerminal(dto)
     * }
     */
    if (dto.terminalId != null) {
      this.apiService.updateTerminal(dto)
        .pipe(first())
        .subscribe(
          data => {
            // if (data.status === 200) {
            location.reload(); // updated successfully.
            // } else {
            //   alert(data.message);
            // }
          },
          error => {
            alert( JSON.stringify(error) );
          });
    } else {
      this.apiService.createTerminal(dto)
        .pipe(first())
        .subscribe(
          data => {
            // if (data.status === 200) {
            location.reload(); // updated successfully.
            // } else {
            //   alert(data.message);
            // }
          },
          error => {
            alert( JSON.stringify(error) );
          });
    }

  }

  public pageRefresh() {
    location.reload();
  }
}
