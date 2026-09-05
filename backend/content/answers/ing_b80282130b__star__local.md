---
qid: ing_b80282130b__star__local
question: How to add component in Angular app? — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 285
output_tokens: 348
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:30-05:00'
sources: []
---

**Situation** – In a client‑facing dashboard I was tasked with adding a reusable analytics card that displayed real‑time KPI metrics. The existing codebase was on Angular 9, and the project had strict linting rules (TSLint disabled, Prettier enforced).  

**Task** – Create a self‑contained component (`kpi-card`) that accepts an input payload of `{title: string; value: number; icon: string}` and emits a click event when the card is selected. It needed to integrate with the existing NgRx store and respect the theming service.  

**Action** – I scaffolded the component with `ng generate component kpi-card --module app`. In `kpi-card.component.ts` I defined `@Input() data: KpiData; @Output() cardClick = new EventEmitter<void>();` and used Angular Material’s `<mat-card>` for layout. I leveraged dependency injection to pull the current theme from a `ThemeService`, added change detection strategy `OnPush` for performance, and wrote unit tests with Jasmine/Karma covering data binding and event emission. Finally, I updated the module imports (`MatCardModule`, `MatIconModule`) and declared the component in the shared module so it could be used across feature modules.  

**Result** – The new card rendered correctly on all screens, reduced rendering time by 18 % thanks to `OnPush`, and was adopted by three separate dashboards, cutting duplicate code by ~200 lines. I learned how to balance Angular’s modularity with performance best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
