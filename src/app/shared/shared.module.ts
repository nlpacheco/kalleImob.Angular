import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowImageFileComponent } from './show-image-file/show-image-file.component';
import { CpfPipe } from './cpf-pipe/cpf.pipe';
import { CnpjPipe } from './cnpj-pipe/cnpj.pipe';


@NgModule({
  declarations: [
    ShowImageFileComponent,
    CpfPipe,
    CnpjPipe
  ],


  imports: [
    CommonModule,
//    ExternalModule
  ],
  exports: [
    ShowImageFileComponent,
    CpfPipe,
    CnpjPipe
  ]
})
export class SharedModule {
}
