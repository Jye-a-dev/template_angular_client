import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  template: `
    <section class="panel">
      <h1>Auth</h1>
      <p>Khu vực đăng nhập có thể mở rộng sau, hiện đang dùng chung ngôn ngữ thiết kế của trang mẫu.</p>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .panel {
        width: min(100%, 360px);
        min-height: 280px;
        border: 2px solid #1f1f1f;
        border-radius: 20px;
        padding: 24px 18px;
        background: #ffffff;
      }

      h1,
      p {
        margin: 0;
      }

      h1 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      p {
        color: #3c3c43;
        line-height: 1.5;
      }
    `,
  ],
})
export class AuthPageComponent {}
