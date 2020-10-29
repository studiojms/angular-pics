import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePasswordCrossfieldValidator: ValidatorFn = (
  formGroup: FormGroup
) => {
  const userName = formGroup.get("userName").value;
  const password = formGroup.get("password").value;

  let result = null;

  if (userName.length > 0 && password.length > 0 && userName == password) {
    result = { userNamePassword: true };
  }

  return result;
};
