import { Component } from '@angular/core';

@Component({
  selector: 'app-base-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <span>&copy; 2026 Template Angular Client</span>
      <span>Built with Angular and TypeScript.</span>
    </footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 16px 18px;
        border-top: 1px solid #e7e7e7;
        color: #5f6482;
        font-size: 14px;
      }

      @media (max-width: 768px) {
        .footer {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding-inline: 14px;
        }
      }
    `,
  ],
})
export class BaseFooterComponent {}
