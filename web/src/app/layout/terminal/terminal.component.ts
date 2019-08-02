import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  terminals;
  selectedTerminal;
  terminalGroups;

  constructor(private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    // this.terminals = this.dataService.getTerminals().content;
    this.apiService.getTerminals()
      .subscribe( data => {
        console.log(data)
        const anyData: any = data
        const terminals = anyData
        this.terminals = terminals.content;
      });
  }

  public selectTerminal(terminal){
    this.selectedTerminal = terminal;
  }

  public selectTerminalGroup(){
    // for (let i = 0; i < this.terminalGroups.length; i++) {
    //   if (this.terminalGroups[i].groupNumber==groupNumber) this.selectedTerminalGroup = this.terminalGroups[i];
    // }
    this.terminalGroups = this.dataService.getTerminalGroups();
  }
}
