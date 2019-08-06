import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import {Router} from '@angular/router';
import {ApiService} from '../../core/service/api.service';

@Component({
  selector: 'app-pan-masked',
  templateUrl: './pan-masked.component.html',
  styleUrls: ['./pan-masked.component.css']
})
export class PanMaskedComponent implements OnInit {

  panMaskeds;

  constructor(private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    /**
     * PROD. Profile
     */


    /**
     * DEV. Profile
     */
    this.panMaskeds = this.dataService.getPanMaskeds();
  }
}
