import { Component } from '@angular/core';

export enum AuthType {
  Admin,
  Allow,
  Deny,
}

@Component({
  selector: 'ngbd-collapse-horizontal',
  templateUrl: './collapse-horizontal.html',
})
export class NgbdCollapseHorizontal {
  public isCollapsed = false;

  authType = AuthType.Allow;

  authTypeOptions = [
    {
      label: 'Allow',
      value: AuthType.Allow,
    },
    {
      label: 'Deny',
      value: AuthType.Deny,
    },
  ];
}
