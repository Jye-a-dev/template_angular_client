import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="home-page">
      <article class="intro-card">
        <h1>Template for angular + ts</h1>
        <p>Mẫu folder cho angular + ts</p>
      </article>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .home-page {
        min-height: 100%;
      }

      .intro-card {
        width: min(100%, 298px);
        min-height: 756px;
        border: 3px solid #1f1f1f;
        border-radius: 20px;
        padding: 18px 10px 18px 10px;
        background: #ffffff;
      }

      h1,
      p {
        margin: 0;
        color: #131313;
      }

      h1 {
        font-size: 17px;
        font-weight: 400;
        line-height: 1.25;
        margin-bottom: 2px;
      }

      p {
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 16px;
        line-height: 1.25;
      }

      @media (max-width: 768px) {
        .intro-card {
          width: 100%;
          min-height: 420px;
        }
      }
    `,
  ],
})
export class HomePageComponent {}
