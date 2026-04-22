import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  template: `
    <section class="panel">
      <h1>Dashboard</h1>
      <p>Trang này giữ chỗ cho khu vực quản trị, cùng hệ khung với giao diện chính.</p>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .panel {
        width: min(100%, 420px);
        min-height: 320px;
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
export class DashboardPageComponent {}
