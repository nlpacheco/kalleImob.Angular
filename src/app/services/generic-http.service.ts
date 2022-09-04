// import { HttpClient, HttpParams } from "@angular/common/http";
// import { map, Observable, throwError } from "rxjs";
// import { FilterParameters } from "../model/filter-parameters";
// import { PaginatedResult, Pagination } from "../model/Pagination";


// export class GenericHttpService<T, U, C, PK>  {


//     constructor(protected http: HttpClient, protected baseUrl: string) {
//     }
  
//     getAll(filterParams?: FilterParameters): Observable<T[]> {
//       let params = new HttpParams();
  
//       if (filterParams != null) {
//         params = filterParams.appendHttpParams(params);
//       }
//       return this.http.get<T[]>(this.baseUrl, { params });
//     }
  
  
//     getAllPaged(page: number, itemsPerPage: number, filterParams?: FilterParameters): Observable<PaginatedResult<T[]>> {
      
//         let params = new HttpParams();
  
//         if (page != null && itemsPerPage != null) {
//             params = params.append('PageNumber', page.toString());
//             params = params.append('PageSize', itemsPerPage.toString());
//         }
//         if (filterParams != null) {
//             params = filterParams.appendHttpParams(params);
//         }
//         return this.http.get<T[]>(this.baseUrl, { observe: 'response', params })
//             .pipe(map(response => {
//                 var paginationString = response.headers.get('X-Pagination');
//                 if (response.body != null) {
//                 var pagination : Pagination = paginationString!=null ?  
//                                                 JSON.parse(paginationString) :
//                                                 {currentPage: 1, pageSize: response.body.length, totalCount: response.body.length, totalPages: 1};
//                 return new PaginatedResult<T[]>(response.body,  pagination);
//                 }
//                 console.log('NO PAGINATION INFO!!');
//                 throw Error("NO PAGINATION AND NO DATA");  
//             })
//             );
    
//     }
  
//     get(id: PK, filterParams?: FilterParameters): Observable<T> {
//       let params = new HttpParams();
//       if (filterParams != null) {
//         params = filterParams.appendHttpParams(params);
//       }
//       return this.http.get<T>(this.baseUrl + '/' + id, { params} );
//     }
  
  
//     update(id: PK, model: U) {
//       return this.http.put<T>(this.baseUrl + '/' + id, model);
//     }
  
//     create(model: C) {
//       return this.http.post<T>(this.baseUrl, model);
//     }
  
  
  
//     updateInBatch(model: U[]) {
//       return this.http.put(this.baseUrl , model);
//     }
  
//     createInBatch(model: C[]) {
//       return this.http.post(this.baseUrl , model);
//     }
  
  
  
  
  
//   }
  