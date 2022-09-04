export interface Pagination {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  }
  
  export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;

    constructor(result: T, pagination: Pagination) {
        this.result = result;
        this.pagination = pagination;
    }
  }
  
  