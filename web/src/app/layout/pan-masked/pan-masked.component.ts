import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import {Router} from '@angular/router';
import {ApiService} from '../../core/service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';
import {terminalToDto} from '../../core/model/terminal.model';

@Component({
  selector: 'app-pan-masked',
  templateUrl: './pan-masked.component.html',
  styleUrls: ['./pan-masked.component.css']
})
export class PanMaskedComponent implements OnInit {

  panMaskeds;
  editForm: FormGroup;
  selectedPanMasked;
  selectedPanMaskedId;
  newPanMasked: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, public dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.newPanMasked = {
      "id": null,
      "templateMasked": null,
      "beginMask": null,
      "endMask": null,
      "maskSymbol": null
    };

    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      templateMasked: ['', Validators.required],
      beginMask: ['', Validators.required],
      endMask: ['', Validators.required],
      maskSymbol: ['', Validators.required]
    });

    /**
     * PROD. Profile
     */


    /**
     * DEV. Profile
     */
    this.panMaskeds = this.dataService.getPanMaskeds();
  }

  public selectPanMasked(panMasked) {
    this.selectedPanMasked = panMasked;

    console.log(panMasked);

    this.editForm.setValue(panMasked);
  }

  public selectPanMaskedId(panMasked) {
    if (this.selectedPanMaskedId === panMasked.id) {
      this.selectPanMasked(panMasked);
    } else {
      this.selectedPanMaskedId = panMasked.id;
    }
  }

  public closePanMasked() {
    this.selectedPanMasked = null;
  }

  public pageRefresh() {
    location.reload();
  }

  public createPanMasked() {
    this.selectedPanMasked = this.newPanMasked;
    console.log(this.newPanMasked)
    this.editForm.setValue(this.newPanMasked);
  }

  onSubmit() {
    console.log(this.editForm.value);
    // const dto = terminalToDto(this.editForm.value);
    // console.log(dto);
    //
    // this.apiService.updateTerminal(dto)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
          location.reload(); // updated successfully.
        // },
        // error => {
        //   alert( JSON.stringify(error) );
        // });
  }
}
