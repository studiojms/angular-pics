import { AbstractControl } from '@angular/forms';

export function CustomMultipleWordsValidator(control: AbstractControl) {
  let errors = null;

  //validates that there is more than one word (thus, one space splitting the trimmed value)
  if (control.value.trim() && !/\s/.test(control.value.trim())) {
    errors = { customMultipleWords: true };
  }

  return errors;
}
