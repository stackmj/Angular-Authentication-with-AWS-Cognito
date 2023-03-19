import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CognitoService } from './cognito.service';

@Directive({
  selector: '[isAuthorize]'
})
export class IsAuthorizeDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
    private cognitoService: CognitoService) {

  }
  @Input() set isAuthorize(roles: string[]) {
    this.cognitoService.getRole().then((role) => {
      if (roles.indexOf(role) > -1) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainer.clear();
      }
    })
  }
}
