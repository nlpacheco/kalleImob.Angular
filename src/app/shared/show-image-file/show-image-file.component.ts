import { Component, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';

@Component({
    selector: 'app-show-image-file',
    templateUrl: './show-image-file.component.html',
    styleUrls: ['./show-image-file.component.scss']
})

export class ShowImageFileComponent implements OnChanges {

  public imagePath;
  imgURL: any;
  public message: string;
  @Input() files;

  imageURLs = [];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
      const change: SimpleChange = changes['files'];
      this.files = change.currentValue;
      this.preview(this.files);
    }

    preview(files: File[]) {


      if (!files || files.length === 0) {
        this.imageURLs = [];
        this.imgURL = null;
        return;
      }
      const tmpURL = [];
      for (const file of files) {

        const mimeType = file.type;

        if (mimeType.match(/image\/*/) != null) {
          const reader = new FileReader();
          this.imagePath = file;
          reader.readAsDataURL(file);
          reader.onload = (event) => {
            tmpURL.push({
              name: file.name,
              content: reader.result});
          };

          // this.message = 'Only images are supported.';
          // this.imgURL = null;
          // return;
        }
      }

      this.imageURLs = tmpURL;

    }

}
