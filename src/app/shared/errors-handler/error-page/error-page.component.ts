import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css']
})

export class ErrorPageComponent implements OnInit{

  errorWithContextInfo: any = {};
  routeParams;
  data;
  modalRef: BsModalRef;

  constructor(private activatedRoute: ActivatedRoute, private modalService: BsModalService) {


  }


  ngOnInit() {
    console.log("ErrorPageComponent: onInit ");

    this.routeParams = this.activatedRoute.snapshot.queryParams;
    this.data = this.activatedRoute.snapshot.data;
    console.log("ErrorPageComponent: routeParams: " + this.routeParams);
    console.log("ErrorPageComponent: data: " + this.data);

    this.activatedRoute.params.subscribe(
      params => {
        if (params['errorWithContextInfo']) {
          console.log("errorWithContextInfo: ]" + params['errorWithContextInfo']);
          this.errorWithContextInfo = params['errorWithContextInfo'];
        }
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
