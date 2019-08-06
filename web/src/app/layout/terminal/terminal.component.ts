import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
      legal_name: [''],
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
    const entity: any = {
      "terminalId": terminal.terminalId,
      "groupNumber": terminal.groupNumber,
      "configChanged": terminal.configChanged,
      "dateTimeInit": terminal.dateTimeInit,
      "legal_name": null,
      "geoPosition": terminal.geoPosition,
      "limitMc": terminal.limitMc,
      "limitProstir": terminal.limitProstir,
      "limitVisa": terminal.limitVisa,
      "manual": terminal.manual,
      "mcAccepted": terminal.mcAccepted,
      "opPurchase": terminal.opPurchase,
      "opRefund": terminal.opRefund,
      "opReversal": terminal.opRefund,
      "pin": terminal.pin,
      "prostirAccepted": terminal.prostirAccepted,
      "receiptTemplate": terminal.receiptTemplate,
      "visaAccepted": terminal.visaAccepted,
      "merchantId": terminal.merchant.merchantId,
      "merchantName": terminal.merchant.merchantName,
      "merchantLocation": terminal.merchant.merchantLocation,
      "taxId": terminal.merchant.taxId,
      "mcc": terminal.merchant.mcc,
      "acquirerId": terminal.merchant.acquirerId,
      "allowedLanguages": null
    };
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
    const dto = {
      "terminalId": this.editForm.value.terminalId,
      "groupNumber": this.editForm.value.groupNumber,
      "opPurchase": this.editForm.value.opPurchase,
      "opReversal": this.editForm.value.opReversal,
      "opRefund": this.editForm.value.opRefund,
      "manual": this.editForm.value.manual,
      "pin": this.editForm.value.pin,
      "geoPosition": this.editForm.value.geoPosition,
      "limitVisa": this.editForm.value.limitVisa,
      "limitMc": this.editForm.value.limitMc,
      "limitProstir": this.editForm.value.limitProstir,
      "visaAccepted": this.editForm.value.visaAccepted,
      "mcAccepted": this.editForm.value.mcAccepted,
      "prostirAccepted": this.editForm.value.prostirAccepted,
      "receiptTemplate": this.editForm.value.receiptTemplate,
      "configChanged": this.editForm.value.configChanged,
      "dateTimeInit": this.editForm.value.dateTimeInit,
      "merchant": {
        "merchantId": this.editForm.value.merchantId,
        "merchantName": this.editForm.value.merchantName,
        "merchantLocation": this.editForm.value.merchantLocation,
        "taxId": this.editForm.value.taxId,
        "mcc": this.editForm.value.mcc,
        "acquirerId": this.editForm.value.acquirerId
      },
      "allowedLanguages": [
        {
          "languageId": "UKR"
        }
      ]
    };
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
