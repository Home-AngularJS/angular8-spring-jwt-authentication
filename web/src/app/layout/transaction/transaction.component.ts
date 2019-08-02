import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  terminalGroups;
  transactions;

  constructor(private router: Router, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.terminalGroups = this.dataService.getTerminalGroups();
    this.transactions = this.dataService.getTransactions();
  }
}
