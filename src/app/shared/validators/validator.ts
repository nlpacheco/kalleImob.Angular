import { GlobalParameters } from 'src/app/helpers/global-parameters/global-parameters';
import { FormGroup } from '@angular/forms';


export class Validator {


  static ValidateCPF(strCPF: string) {
    let Soma = 0;
    let Resto = 0;

    if (!strCPF || strCPF === '' || strCPF === '00000000000') {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0;
    }
    if (Resto !== parseInt(strCPF.substring(9, 10), 10) ) {
      return false;
    }

    Soma = 0;
    for (let i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {  Resto = 0; }
    if (Resto !== parseInt(strCPF.substring(10, 11), 10 ) ) { return false; }
    return true;
  }


  static ValidateCNPJ(cnpj: string): boolean {

    if (cnpj == null || cnpj === '') {  return false; }

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') { return false; }

    if (cnpj.length !== 14) {
        return false;
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    let  i = 0;
    for (i = tamanho; i >= 1; i--) {
      soma += (+numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
            pos = 9;
      }
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== +digitos.charAt(0)) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += (+numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
            pos = 9;
      }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== +digitos.charAt(1)) {
          return false;
    }

    return true;

  }




  public static findInvalidControls(formGroup: FormGroup) {
    const controls = formGroup.controls;
    console.log('Form.invalid:  ' + formGroup.invalid);
    if (formGroup.invalid) {
      if (formGroup.errors != null) {
        for (const err in formGroup.errors) {
          console.error('--> ', err);
        }
      }
      console.log('Invalid Controls');
      for (const name in controls) {
          if (controls[name].invalid) {
              console.warn(name);
              for (const err in controls[name].errors) {
                console.error('--> ', err);
              }
          }
      }
    }

    console.log('Form.dirty:  ' + formGroup.dirty);
    if (formGroup.dirty) {
      console.log('Dirty Controls');
      for (const name in controls) {
          if (controls[name].dirty) {
              console.log(name);
          }
      }
    }
    console.log('All Control values');
    for (const name in controls) {
        console.log(name, controls[name].value );
    }
  }


  public static JustFilename(fullpath: string): string {
    return (!!fullpath) ?     fullpath.substring(fullpath.lastIndexOf('/') + 1, 100)
                        : '';
  }

  public static BuildURL(logoFileName: string): string | null {

    return    logoFileName == null  || logoFileName.length === 0
                                    || logoFileName === ' '                     ? null
            : logoFileName.includes('www') || logoFileName.includes('http')     ? logoFileName
                                                                                : (GlobalParameters.baseUrl + logoFileName);

  }

}
