---
qid: ing_b80282130b__faang__local
question: How to add component in Angular app? — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 282
output_tokens: 465
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:11-05:00'
sources: []
---

**Clarify**  
You want to add a *new component* in an Angular (v8+) project – i.e., create the TS/HTML/CSS files, register it with a module, and use it in a template. I’ll assume you’re using the CLI, have a standard `AppModule`, and no lazy‑loaded modules.

**Approach**  
1. Generate component via CLI (`ng generate component foo`).  
2. Verify that the generated selector (e.g., `<app-foo>`) is exported from `FooComponent`.  
3. Import the component’s module into any parent NgModule that needs it, or let the CLI add it automatically to `AppModule`.  
4. Use the selector in a template (`<app-foo></app-foo>`).  

**Depth**  
*CLI step*:  
```bash
ng g c foo
```
This creates:
- `foo.component.ts` (decorator with `selector: 'app-foo'`)
- `foo.component.html`, `.scss/.css`
- Updates the nearest module’s `declarations`.

If you’re adding to a feature module, run `ng g c features/foo --module=features.module`. The component will be declared there. Angular’s compiler (AOT) then bundles it; no runtime registration needed.

**Edge cases**  
- **Name collision**: ensure selector is unique across modules.  
- **Lazy‑loaded modules**: if the component lives in a lazy module, you must import that module before using its selector elsewhere.  
- **Routing**: if you intend to route to it, add a `path` entry in the module’s `RouterModule.forChild`.

**Optimize & communicate**  
For large apps, keep components lightweight (≤ 200 lines) and share logic via services or NgRx to avoid duplication. When explaining, emphasize that CLI‑generated files guarantee consistency and proper module wiring—reducing bugs from manual edits. If a component must be reused across modules, consider creating a shared module with `exports: [FooComponent]`. This keeps the architecture clean and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
