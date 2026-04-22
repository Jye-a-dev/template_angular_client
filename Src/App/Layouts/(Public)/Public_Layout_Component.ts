import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseFooterComponent } from '../Base/Footer/Base_Footer_Component';
import { BaseNavbarComponent } from '../Base/Navbar/Base_Navbar_Component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, BaseNavbarComponent, BaseFooterComponent],
  template: `
    <div class="page-shell">
      <app-base-navbar />
      <main class="content-area">
        <router-outlet />
      </main>
      <app-base-footer />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100dvh;
        background: #ffffff;
        color: #171717;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      .page-shell {
        width: min(100%, 1096px);
        min-height: 100dvh;
        margin: 0 auto;
        border-inline: 1px solid #e7e7e7;
        display: grid;
        grid-template-rows: auto 1fr auto;
        background: #ffffff;
      }

      .content-area {
        padding: 46px 18px 44px;
      }

      @media (max-width: 768px) {
        .page-shell {
          border-inline: 0;
        }

        .content-area {
          padding: 28px 14px 32px;
        }
      }
    `,
  ],
})
export class PublicLayoutComponent {}
