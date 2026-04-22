# Angular Client Template

## Clone repo này
```bash
git clone <repo-url>
```

Template khởi tạo cho frontend dùng **Angular standalone + Angular Router** theo hướng dễ mở rộng, rõ layout, rõ khu vực route, và đủ gọn để làm base cho project mới.

## Stack hiện tại

- Angular 21
- TypeScript 5
- Angular Router
- Angular SSR
- Express
- CSS thuần

Template này phù hợp khi bạn muốn bắt đầu với một client app bằng Angular nhưng vẫn giữ cấu trúc folder rõ từ đầu để mở rộng tiếp cho `public`, `auth`, `dashboard`, `core`, `layouts`, `shared`.

## 1. Project này đang setup theo kiểu nào?

Repo hiện tại là kiểu:

`Angular + TypeScript + Standalone Components + Angular Router + SSR`

Đây là setup phù hợp cho:

- Website có nhiều khu vực giao diện
- Dashboard hoặc admin panel
- Client app cần chia layout theo khu vực
- Dự án muốn chuẩn bị sẵn khung `public`, `auth`, `dashboard`
- Team muốn route rõ ràng bằng `Routes` và `router-outlet`

Template này hiện đang là một base giao diện tối giản:

- đã có route public cho `/`
- đã có route `/auth`
- đã có route `/dashboard`
- đã có `PublicLayoutComponent` làm shell chung cho khu vực public
- đã có `BaseNavbarComponent` và `BaseFooterComponent`
- đã có folder nền cho `Core`, `Features`, `Layouts`, `Shared`, `Public`
- đã có sẵn SSR với Angular + Express

## 2. Khi nào nên dùng template này?

Nên dùng template này khi bạn cần:

- Angular theo hướng hiện đại với standalone component
- route rõ theo config thay vì tự ráp thủ công từng màn
- layout theo khu vực như `public`, `auth`, `dashboard`
- khả năng mở rộng dần từ template nhỏ lên project lớn
- SSR sẵn từ đầu nhưng vẫn giữ cấu trúc dễ đọc

Không nên dùng template này nếu bạn chỉ cần một project cực nhỏ để demo 1 đến 2 component. Khi đó Angular CLI mặc định là đủ.

## 3. Khi nào nên chọn Angular cho kiểu project này?

Nên chọn **Angular** khi bạn muốn:

- cấu trúc app chặt hơn ngay từ đầu
- router, DI, provider, guard, interceptor đi cùng framework
- dễ chia app theo `core`, `shared`, `features`, `layouts`
- có sẵn hướng mở rộng sang SSR
- team muốn convention rõ và đồng đều

Nên chọn **React + Vite** nếu bạn chỉ cần một SPA client-side rất gọn, muốn tự chọn thư viện theo từng phần, và không cần framework opinionated mạnh như Angular.

Project này đang đi theo hướng **Angular standalone app**, không phải `React + Vite`, cũng không phải `Next.js App Router`.

## 4. Cài và chạy project

### Yêu cầu

- Node.js 20+
- npm 10+

### Cài dependency

```bash
npm install
```

### Chạy môi trường dev

```bash
npm start
```

### Build production

```bash
npm run build
```

### Build watch cho development

```bash
npm run watch
```

### Chạy production SSR server

```bash
npm run serve:ssr:template-angular-client
```

### Test

```bash
npm run test
```

## 5. Cấu trúc thư mục hiện tại

```text
Src/
├─ App/
│  ├─ (Dashboard)/
│  │  └─ (Dashboard).md
│  ├─ (Public)/
│  │  ├─ AuthPage/
│  │  │  └─ AuthPage.md
│  │  ├─ HomePage/
│  │  │  └─ HomePage.md
│  │  └─ (Public).md
│  ├─ Core/
│  │  ├─ Guards/
│  │  │  ├─ Auth_Guard.md
│  │  │  └─ Guards.md
│  │  ├─ Interceptors/
│  │  │  ├─ Auth_Interceptor.md
│  │  │  └─ Interceptors.md
│  │  ├─ Models/
│  │  │  ├─ Models.md
│  │  │  └─ User_Model.md
│  │  ├─ Providers/
│  │  │  ├─ Providers.md
│  │  │  └─ Providers.ts
│  │  ├─ Services/
│  │  │  └─ Services.md
│  │  └─ Utils/
│  │     ├─ Storage_Util.md
│  │     └─ Utils.md
│  ├─ Features/
│  │  ├─ Dashboard/
│  │  │  ├─ Dashboard.md
│  │  │  └─ Dashboard_Page/
│  │  │     ├─ Dashboard_Page.md
│  │  │     └─ Dashboard_Page_Component.ts
│  │  ├─ Not_Found/
│  │  │  ├─ Not_Found.md
│  │  │  └─ Not_Found_Component.ts
│  │  └─ Public/
│  │     ├─ Auth_Page/
│  │     │  ├─ Auth_Page.md
│  │     │  └─ Auth_Page_Component.ts
│  │     ├─ Home_Page/
│  │     │  ├─ Home_Page.md
│  │     │  └─ Home_Page_Component.ts
│  │     └─ Public.md
│  ├─ Layouts/
│  │  ├─ (Dashboard)/
│  │  │  └─ (Dashboard).md
│  │  ├─ (Public)/
│  │  │  ├─ Public_Layout.md
│  │  │  └─ Public_Layout_Component.ts
│  │  └─ Base/
│  │     ├─ Footer/
│  │     │  ├─ Footer.md
│  │     │  └─ Base_Footer_Component.ts
│  │     ├─ Navbar/
│  │     │  ├─ Navbar.md
│  │     │  └─ Base_Navbar_Component.ts
│  │     └─ Base.md
│  ├─ Shared/
│  │  ├─ Components/
│  │  │  └─ Components.md
│  │  ├─ Directives/
│  │  │  └─ Directives.md
│  │  ├─ Pipes/
│  │  │  └─ Pipes.md
│  │  └─ Shared.md
│  ├─ App.html
│  ├─ App.ts
│  ├─ App_Config.ts
│  ├─ App_Config_Server.ts
│  ├─ App_Routes.ts
│  └─ App_Routes_Server.ts
├─ Index.html
├─ Main.ts
├─ Main_Server.ts
├─ Server.ts
└─ Styles.css

Public/
└─ Img/
   └─ Img.md
```

## 6. Ý nghĩa chính của từng phần

- `Src/App/App.ts`: root component của app, hiện chỉ render `router-outlet`
- `Src/App/App_Routes.ts`: nơi khai báo route chính của toàn app
- `Src/App/Core`: nơi để provider, guard, interceptor, model, service, util dùng chung
- `Src/App/Features`: nơi để feature/page component thật của ứng dụng
- `Src/App/Layouts`: nơi chứa shell layout và khung base
- `Src/App/Layouts/Base`: các component base như navbar, footer
- `Src/App/Layouts/(Public)`: layout dành cho khu vực public
- `Src/App/Shared`: chỗ để component, directive, pipe dùng chung
- `Src/Main.ts`: entry bootstrap phía client
- `Src/Main_Server.ts`: entry bootstrap cho SSR
- `Src/Server.ts`: Express server cho Angular SSR
- `Public/`: nơi chứa static assets được copy vào build output

## 7. Luồng render hiện tại của app

Luồng cơ bản cho route `/` hiện tại:

```text
Request "/"
-> bootstrapApplication(App, appConfig)
-> App
-> <router-outlet>
-> PublicLayoutComponent
-> BaseNavbarComponent
-> child route ""
-> HomePageComponent
-> BaseFooterComponent
```

Luồng cho các route khác:

```text
"/auth"
-> PublicLayoutComponent
-> AuthPageComponent

"/dashboard"
-> PublicLayoutComponent
-> DashboardPageComponent

"**"
-> NotFoundComponent
```

Ý nghĩa:

- `App.ts` giữ root shell tối thiểu
- `App_Routes.ts` quyết định mapping route
- `PublicLayoutComponent` bọc navbar, vùng nội dung và footer
- `router-outlet` bên trong layout render page con theo route
- `NotFoundComponent` xử lý route không tồn tại

## 8. Quy ước layout hiện tại

Project đang đi theo hướng:

- `App.ts` chỉ làm root host
- layout theo khu vực nằm trong `Layouts/`
- page thật nằm trong `Features/`
- layout public bọc page qua `router-outlet`
- component base giữ vai trò UI shell dùng lại

Ví dụ:

- `Base_Navbar_Component.ts`: navbar cơ bản cho app
- `Base_Footer_Component.ts`: footer cơ bản cho app
- `Public_Layout_Component.ts`: ghép navbar, content area và footer
- `Home_Page_Component.ts`: page chính của route `/`
- `Auth_Page_Component.ts`: page của route `/auth`
- `Dashboard_Page_Component.ts`: page của route `/dashboard`

Cách chia này giúp:

- layout và page không dính cứng vào nhau
- route dễ mở rộng thêm children
- phần base có thể tái sử dụng cho nhiều khu vực khác sau này

## 9. CSS trong project này

Project hiện dùng **CSS thuần** qua file global:

```text
Src/Styles.css
```

Ngoài global CSS, nhiều standalone component đang khai báo `styles` inline ngay trong decorator `@Component`.

Nên dùng setup hiện tại cho:

- layout
- spacing
- typography
- border
- responsive cơ bản

Khi project lớn hơn, có thể chuẩn hóa tiếp:

- color tokens
- spacing tokens
- shared utility classes
- design primitives cho layout

## 10. TypeScript trong project này

Project đang bật TypeScript khá chặt:

- `strict: true`
- `noImplicitOverride: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`
- `strictInjectionParameters: true`
- `strictTemplates: true`

Nên giữ nguyên hướng:

- type dùng chung đặt trong `Core/Models` hoặc tách thêm `Types/` nếu project lớn hơn
- provider dùng chung gom về `Core/Providers`
- utility dùng chung gom về `Core/Utils`
- tránh để logic route, layout, service trộn lẫn trong cùng một file

## 11. Quy tắc tổ chức code nên giữ

- `App.ts` chỉ nên giữ root host càng mỏng càng tốt
- `App_Routes.ts` chỉ lo route config
- `Features/` nên chứa page-level component hoặc feature component chính
- `Layouts/` chỉ nên lo shell và structure
- `Base/` không nên chứa nội dung nghiệp vụ nặng
- `Core/Services` không render UI
- `Core/Guards` chỉ lo logic chặn route
- `Core/Interceptors` chỉ lo HTTP concern chung
- `Shared/` nên là phần tái sử dụng ngang nhiều feature

## 12. Hướng mở rộng hợp lý cho repo này

Từ base hiện tại, bạn có thể mở rộng thêm:

- auth flow thật
- protected dashboard routes bằng guard
- HTTP interceptor cho token
- API service layer
- env config rõ hơn theo môi trường
- state management nếu app cần
- form validation
- loading state và error handling
- toast system
- theme switch

Nếu app lớn dần, có thể bổ sung thêm:

- `features/` tách module nghiệp vụ sâu hơn
- `schemas/`
- `constants/`
- `tokens/`
- `providers/`
- `api/`

## 13. Khi nào nên tách theo feature?

Nên tách theo feature khi:

- app có nhiều module nghiệp vụ rõ ràng
- mỗi module có page, service, model, util riêng
- team có nhiều người cùng làm song song

Ví dụ sau này:

```text
Src/App/Features/
├─ Auth/
├─ Dashboard/
├─ Profile/
└─ Orders/
```

Nếu project vẫn nhỏ, giữ cấu trúc hiện tại là đủ và dễ đọc hơn.

## 14. Checklist khi dùng template này để bắt đầu project mới

- đổi tên app, brand và nội dung mặc định trong navbar/footer
- sửa lại route thật trong `Src/App/App_Routes.ts`
- thêm guard nếu có protected route
- thêm service layer để gọi backend
- chuẩn hóa model/type dùng chung
- tách logic dùng lại vào `Core` hoặc `Shared`
- thêm static assets thật vào `Public/`
- giữ layout là shell, không nhét quá nhiều nghiệp vụ vào đó
- quyết định sớm có dùng SSR lâu dài hay chỉ giữ làm nền

## 15. Tóm tắt

Nếu bạn muốn một base Angular có:

- standalone component
- route config rõ
- layout rõ
- tách `core`, `features`, `layouts`, `shared`
- sẵn nền để scale tiếp
- có SSR từ đầu

thì repo này đang đi đúng hướng.

Nó không phải template demo Angular tối thiểu, mà là một **Angular client-oriented template** có sẵn route, layout và nền SSR đủ sạch để phát triển tiếp thành website, dashboard hoặc frontend app có nhiều khu vực giao diện.
