import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { IGenericModelObject } from 'src/app/model/generic-model-object';
import { FilterParameters } from 'src/app/model/FilterParameter';


export class LocalCacheControl<PK, T extends IGenericModelObject<PK>> {


  cacheDate: moment.Moment;
  cacheObserver$: BehaviorSubject<T[]>;
  serviceURL: string;
  cacheMaxAgeMinutes: number;

  constructor(serviceURL: string, cacheMaxAgeMinutes: number) {
    this.serviceURL = serviceURL;
    this.cacheMaxAgeMinutes = cacheMaxAgeMinutes;
    this.cacheObserver$ = new BehaviorSubject<T[]>([]);
  }


  private getAll(http: HttpClient): Observable<T[]> {

    const filterParams = new FilterParameters();
    filterParams.isCanceled = false;
    const params = filterParams.AppendHttpParams(new HttpParams());

    return http.get<T[]>( this.serviceURL, {params} );
  }


  getFromCache(http: HttpClient): Observable<T[]> {

    if (this.IsCacheAgeOld()) {
      this.updateCache(http);
    }
    return this.cacheObserver$;
  }

  updateCache(http: HttpClient) {

    this.getAll(http).subscribe(
      s => {
        this.cacheDate = moment();
        this.cacheObserver$.next(s);
    });
  }


  private IsCacheAgeOld(): boolean {
      if (this.cacheDate == null) {
        return true;
      }
      return (moment().diff(this.cacheDate, 'minutes') > this.cacheMaxAgeMinutes);

    }


}

