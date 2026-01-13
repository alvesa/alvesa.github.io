import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-docs',
    standalone: true,
    imports: [RouterOutlet],
    template: `<div class="docs-container container"><router-outlet></router-outlet></div>`,
    styles: [`
    .docs-container {
      padding: 0 20px;
      margin-top: 2rem;
    }
  `]
})
export class DocsComponent { }
