---
qid: ing_dddd72c27d__faang__local
question: What is data binding in Angular 8? — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 283
output_tokens: 431
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:14:44-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about *data binding* in Angular 8 – the mechanism that synchronizes data between the component class and its template. I’d confirm whether they mean one‑way (interpolation, property) or two‑way (`[(ngModel)]`) binding, and whether they want a comparison with other frameworks.

**Approach**  
1. Explain the four types of Angular binding: interpolation, property, event, and two‑way.  
2. Show how each maps to template syntax.  
3. Highlight change detection and its impact on performance.  

**Depth**  
- **Interpolation (`{{ }}`)** – one‑way from component → view; safe against XSS via sanitization.  
- **Property binding (`[property]="expr"`)** – sets DOM property, e.g., `[src]`.  
- **Event binding (`(event)="handler($event)"`)** – sends events back to the class.  
- **Two‑way (`[(ngModel)]="model"`)** – syntactic sugar for `[value]="model"` + `(input)="model=$event.target.value"`, requires `FormsModule`.  
Angular’s change detection runs on each zone event; bindings are reevaluated automatically, making UI reactive without manual DOM updates.  

**Edge Cases**  
- Binding to non‑existing properties throws runtime errors.  
- Using `*ngIf` or structural directives can remove elements from the DOM, breaking bindings temporarily.  
- Two‑way binding on complex objects requires careful immutability to avoid stale references.  

**Optimize & Communicate**  
For large lists, use `trackBy` with `*ngFor` to reduce re‑rendering; for heavy computations, move logic into pure pipes or services. I’d conclude by noting that data binding in Angular is declarative, unidirectional by default, and only two‑way when explicitly requested—this keeps change detection predictable and performance efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
