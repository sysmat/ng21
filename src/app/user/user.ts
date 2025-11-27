import { Component, effect, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <h2>user page</h2>
    <div>id: {{ orgId() }}</div>
  `,
})
export class User {
  readonly orgId = input.required({ alias: 'id', transform: numberAttribute }); // URL query parameter org
  readonly #effOrgId = effect(() => {
    if (!this.orgId()) {
      throw new Error('orgId is required input');
    }
  });
}
