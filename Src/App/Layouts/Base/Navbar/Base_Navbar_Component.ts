import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-base-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <a class="brand" routerLink="/">Template Angular</a>
      <a class="home-button" routerLink="/">Home</a>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 18px;
        border-bottom: 1px solid #e7e7e7;
      }

      .brand,
      .home-button {
        text-decoration: none;
      }

      .brand {
        color: #171717;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.2;
      }

      .home-button {
        border-radius: 999px;
        background: #19191d;
        color: #ffffff;
        padding: 11px 18px;
        min-width: 80px;
        font-size: 14px;
        font-weight: 700;
        text-align: center;
      }

      @media (max-width: 768px) {
        .topbar {
          padding-inline: 14px;
        }
      }
    `,
  ],
})
export class BaseNavbarComponent {}
