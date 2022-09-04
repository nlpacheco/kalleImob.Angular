import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-errors-modal',
    templateUrl: './errors-modal.component.html',
    styleUrls: ['./errors-modal.component.scss']
})

export class ErrorsModalComponent {

  closeBtnName = 'Fechar';
  data: any = [];

  constructor(public bsModalRef: BsModalRef) {}

}
