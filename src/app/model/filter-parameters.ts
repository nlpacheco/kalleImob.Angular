import { HttpParams } from "@angular/common/http";
import dayjs from "dayjs";
import { Utils } from "../shared/utils";

export const parametersNames = {

    userIdParameterName: 'userId',
    emailParameterName: 'email',
    mobileParameterName: 'mobile',
    isCanceledParameterName: 'isCanceled',
    referenceDateParameterName: 'refDate',
    updateDateParameterName: 'updateAt',
  
  }
  export enum CancelFilter {
    ShowAll  = 1,
    OnlyNotCancelled,
    OnlyCancelled
  }

  export class FilterParameters {
    referenceDate?: dayjs.Dayjs;
    updateDate?: dayjs.Dayjs;
    validAt?: dayjs.Dayjs;
  
    userId: number = 0;
    mobile: string = "";
    eMail: string = "";
    CPF: string = "";
    firstName: string = "";
    lastName: string = "";
    companyName: string = "";
    cnpj: string = "";
    cancelFilter: CancelFilter =  CancelFilter.OnlyNotCancelled;

    //isCanceled: boolean = false;
  
  //  birthdate?: moment.Moment;
  //  validAt?: moment.Moment;
  
    public resetFilter() {
        this.referenceDate = undefined;
        this.updateDate = undefined;
        this.validAt = undefined;
    
        this.userId = 0;
        this.eMail = "";
        this.mobile = "";

        this.firstName = "";
        this.lastName = "";
        this.CPF = "";
        this.companyName = "";
        this.cnpj = "";
        this.cancelFilter = CancelFilter.OnlyNotCancelled;
    }
  
    public appendHttpParams(params: HttpParams): HttpParams {
  
      if (!Utils.IsStringEmpty(this.eMail) ) {
        params = params.append(parametersNames.emailParameterName, this.eMail);
      }
  
      if (!Utils.IsStringEmpty(this.mobile)) {
        params = params.append(parametersNames.mobileParameterName, this.mobile);
      }
  
      if (this.userId > 0 ) {
        params = params.append(parametersNames.userIdParameterName, this.userId);
      }
  
      if (this.referenceDate != null) {
        params = params.append(parametersNames.referenceDateParameterName, this.referenceDate.toISOString());
      }
  
      if (this.updateDate != null) {
        params = params.append(parametersNames.updateDateParameterName, this.updateDate.toISOString());
      }
  
      if (this.userId != null) {
        params = params.append(parametersNames.userIdParameterName, this.userId.toString());
      }
  
  
      if (this.cancelFilter != CancelFilter.ShowAll) {
          params = params.append(parametersNames.isCanceledParameterName, 
                                    (this.cancelFilter == CancelFilter.OnlyCancelled).toString());
      }
      return params;
    }
  }
  