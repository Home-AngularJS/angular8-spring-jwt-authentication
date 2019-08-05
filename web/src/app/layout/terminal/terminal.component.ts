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
  terminalGroups;
  editForm: FormGroup;
  takeChoices: any;
  newTerminal: any;
  selectedTerminalGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.takeChoices = this.dataService.getTakeChoices();

    this.newTerminal = {
      "terminalId": null,
      "groupNumber": null,
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
      "configChanged": null,
      "dateTimeInit": null,
      "merchant": {},
      "allowedLanguages": []
    };

    this.editForm = this.formBuilder.group({
      terminalId: ['', Validators.required],
      groupNumber: ['', Validators.required],
      configChanged: [''],
      dateTimeInit: [''],
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
      merchant: [''],
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
    console.log(terminal)
    this.editForm.setValue(terminal);
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
    this.apiService.updateTerminal(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // if (data.status === 200) {
          //   alert('User updated successfully.');
          location.reload();
          // } else {
          //   alert(data.message);
          // }
        },
        error => {
          alert( JSON.stringify(error) );
        });
  }

  public pageRefresh() {
    location.reload();
  }

  public createTerminal() {
    this.selectedTerminal = this.newTerminal;
    console.log(this.newTerminal)
    this.editForm.setValue(this.newTerminal);
  }
}
