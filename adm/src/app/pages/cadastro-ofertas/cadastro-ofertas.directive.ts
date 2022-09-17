import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: "[minValue]",
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValueValidatorDirective, multi: true }]
})
export class MinValueValidatorDirective implements Validator {
    @Input("minValue") value: string;

    validate(control: AbstractControl) : {[key: string]: any} | null {
        if (control.value && parseInt(control.value) < parseInt(this.value)) {
            return { 'minValue': true };
        }

        return null;
    }
}


@Directive({
    selector: "[maxValue]",
    providers: [{ provide: NG_VALIDATORS, useExisting: MaxValueValidatorDirective, multi: true }]
  })
  export class MaxValueValidatorDirective implements Validator {
      @Input("maxValue") value: string;
  
      validate(control: AbstractControl) : {[key: string]: any} | null {
          if (control.value && parseInt(control.value) >= parseInt(this.value)) {
              return { 'maxValue': true };
          }
  
          return null;
      }
}


@Directive({
    selector: "[unique]",
    providers: [{ provide: NG_VALIDATORS, useExisting: UniqueValidatorDirective, multi: true }]
  })
  export class UniqueValidatorDirective implements Validator {
      @Input("unique") value: any[];
  
      validate(control: AbstractControl) : {[key: string]: any} | null {
          if (control.value && this.value.map(o => o.id).includes(parseInt(control.value))) {
              return { 'unique': true };
          }
  
          return null;
      }
}