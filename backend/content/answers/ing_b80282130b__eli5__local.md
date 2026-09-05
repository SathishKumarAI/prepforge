---
qid: ing_b80282130b__eli5__local
question: How to add component in Angular app? — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 330
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:06-05:00'
sources: []
---

Think of an Angular app like a kitchen where each dish (feature) is made from a set of ingredients (components). Adding a new component is like chopping a fresh vegetable: you create it once and then use it wherever the recipe needs that flavor.

1. **Generate the component** – Open your terminal in the project folder and run  
   ```bash
   ng generate component my‑widget
   ```  
   This writes four files (`my-widget.component.ts`, `.html`, `.scss`, `.spec.ts`) and updates the module automatically.

2. **Write its template** – In `my-widget.component.html` put the HTML you want, e.g. `<p>Hello!</p>`.

3. **Style it** – Add CSS in `my-widget.component.scss`.  
   (Styles are scoped to this component only.)

4. **Use it** – Wherever you need the widget, insert its selector tag (found in the TypeScript file) into another template:  
   ```html
   <app-my-widget></app-my-widget>
   ```

5. **Run and test** – `ng serve` rebuilds the app; your new component appears wherever you placed it.

*Unavoidable terms:*  
- **Component** – A self‑contained unit with its own template, logic, and styles.  
- **Module** – A container that declares which components belong together.  

That’s all—like chopping a vegetable once and then sprinkling it throughout your dishes!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
