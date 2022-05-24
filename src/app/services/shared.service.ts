import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  globals: {};

  constructor() {
    this.globals = {
      links: [
        {
          linkUrl: 'https://www.linkedin.com/in/gergi-hrv/',
          linkText: 'LinkedIn',
        },
        {
          linkUrl: 'https://github.com/GergiH',
          linkText: 'GitHub',
        },
      ],
    };
  }
}
