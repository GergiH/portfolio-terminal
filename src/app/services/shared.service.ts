import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  globals: {};

  constructor() {
    this.globals = {
      links: {
        linkedIn: '',
        gitHub: '',
      },
    };
  }
}
