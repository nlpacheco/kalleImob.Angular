import { HttpClient } from "@angular/common/http";
import dayjs from "dayjs";
import { BehaviorSubject, Observable } from "rxjs";
import { GenericHttpService } from "./generic-http-service";



export class GenericHttpServiceWithCache<T, U, C, PK> extends GenericHttpService <T, U, C, PK> {


    cacheDate: dayjs.Dayjs;
    cacheObserver$: BehaviorSubject<T[]>;
    //protected http: HttpClient;
    currentData: T[] = [];


    constructor(http: HttpClient, private serviceURL: string, private cacheMaxAgeMinutes: number = 3600) {
                super(http, serviceURL);
        this.cacheObserver$ = new BehaviorSubject<T[]>([]);
        this.cacheDate = dayjs().subtract(-1, 'year');
    }


    refreshCache() {
        this.updateCache();
    }


    public getAllFromCache(): Observable<T[]> {

        if (this.isCacheAgeOld()) {
            this.updateCache();
        }
        return this.cacheObserver$;
    }

    public filterFromCache(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): Observable<T[]> {
        return new  Observable<T[]>((observer) => {
                if (this.isCacheAgeOld()) {
                        this.getAll().subscribe(
                        s => {
                        this.cacheDate = dayjs();
                        this.cacheObserver$.next(s);
                        this.currentData = s;
                        observer.next( s.filter(predicate) );
                    });
                } else {
                    observer.next( this.currentData.filter(predicate));
                }
        });
    }



    updateCache() {

        this.getAll().subscribe(
        s => {
            this.cacheDate = dayjs();
            this.cacheObserver$.next(s);
            this.currentData = s;
        });
    }


    private isCacheAgeOld(): boolean {
        console.log('LanguageService - isCacheAgeOld 1: ', this.cacheDate == null )
        if (this.cacheDate == null || this.currentData == null) {
            return true;
        }
        console.log('LanguageService - isCacheAgeOld 2: ', (dayjs().diff(this.cacheDate,'minute')> this.cacheMaxAgeMinutes));
        return (dayjs().diff(this.cacheDate,'minute')> this.cacheMaxAgeMinutes)

    }



}
