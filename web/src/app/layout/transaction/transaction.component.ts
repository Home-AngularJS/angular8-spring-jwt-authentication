import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions;
  terminalGroups;

  constructor(private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    /**
     * PROD. Profile
     */
    // this.apiService.getTransactions()
    //   .subscribe( data => {
    //     console.log(data)
    //     const anyData: any = data
    //     const transactions = anyData
    //     this.transactions = transactions.content;
    //   });

    this.apiService.getTerminalGroups()
      .subscribe( data => {
        console.log(data)
        const anyData: any = data
        const terminalGroups = anyData
        this.terminalGroups = terminalGroups;
      });

    /**
     * DEV. Profile
     */
    this.transactions = this.dataService.getTransactions();
    // this.terminalGroups = this.dataService.getTerminalGroups();
  }
}
