
export class UserPreferences {

    constructor(
        public viewCanceledObjects: boolean = false,
        public paginationPageSize: number = 20,
        public pagSize: number = 20,
        public debugMode: boolean = false,
        public darkMode: boolean = false
    ){}
  }
  