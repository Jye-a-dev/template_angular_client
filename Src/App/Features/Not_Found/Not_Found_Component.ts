import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="not-found-shell">
      <section class="not-found-card">
        <h1>404</h1>
        <p>Trang bạn tìm không tồn tại.</p>
        <a routerLink="/">Quay về Home</a>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100dvh;
        background: #ffffff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .not-found-shell {
        width: min(100%, 1096px);
        min-height: 100dvh;
        margin: 0 auto;
        border-inline: 1px solid #e7e7e7;
        display: grid;
        place-items: center;
        padding: 24px;
      }

      .not-found-card {
        width: min(100%, 320px);
        padding: 28px 20px;
        border: 2px solid #1f1f1f;
        border-radius: 20px;
      }

      h1,
      p,
      a {
        margin: 0;
      }

      h1 {
        font-size: 40px;
        margin-bottom: 8px;
      }

      p {
        margin-bottom: 16px;
        color: #4d4d4d;
      }

      a {
        color: #171717;
        font-weight: 600;
        text-decoration: none;
      }
    `,
  ],
})
export class NotFoundComponent {}
