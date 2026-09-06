---
qid: ing_b80282130b__think__local
question: How to add component in Angular app? — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 477
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:05:45-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The question is about *adding a component* in an Angular (likely v8+) application, not just any UI framework.  
   - Assume we’re working from a CLI‑generated project (`ng new …`) and that the user wants to create a reusable component within a module.

**2️⃣ Mental model / framework**  
   - **Angular CLI**: handles scaffolding, file structure, and updates declarations/exports automatically.  
   - **Module system**: every component must be declared in exactly one NgModule (often `AppModule` or a feature module).  
   - **File layout**: `<name>.component.ts`, `.html`, `.scss/.css`, `.spec.ts`.

**3️⃣ Step‑by‑step reasoning**  
   1. Open terminal, navigate to project root.  
   2. Run `ng generate component <path>/<component-name>` (or shorthand `ng g c …`).  
      - If creating inside a feature module: `ng g c features/user/profile`.  
   3. The CLI creates the folder, files, and updates the nearest NgModule’s `declarations` array automatically.  
   4. Edit `<component>.html` for template, `<component>.scss` for styles, `<component>.ts` for logic.  
   5. Import and use the component selector (`<app-component-name>`) in any template that belongs to a module where it’s declared/ exported.

**4️⃣ Common traps**  
   - Forgetting to import the feature module into `AppModule`.  
   - Declaring the same component twice (e.g., manually adding it after CLI).  
   - Using wrong selector name (`app-foo` vs. `appFoo`).  
   - Not running `ng serve` after changes.

**5️⃣ Sanity‑check & verbalize**  
   - Confirm the component appears in the generated module’s `declarations`.  
   - Run `ng serve`, navigate to a page that includes the selector, and verify rendering.  
   - If it doesn’t show, check console errors for missing modules or selector typos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
