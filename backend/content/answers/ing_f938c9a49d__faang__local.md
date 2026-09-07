---
qid: ing_f938c9a49d__faang__local
question: What is the requirement and usage of Angular 8 components?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 651
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:15-05:00'
sources: []
---

**Clarify**  
You’re asking about *Angular 8* – specifically, what a component needs to function and how it’s used in an application.  
Assumptions:  
- You mean “components” as the core UI building blocks (not Angular Material components).  
- We’re focusing on Angular 8 syntax (still before Ivy‑only release).

**Approach**  
1. List the minimal artifacts a component must have.  
2. Explain the lifecycle and how it plugs into an app module.  
3. Show typical usage patterns (inputs/outputs, services, change detection).  

**Depth**  
A component is a **TypeScript class decorated with `@Component`** that ties together:  

| Piece | Purpose |
|-------|---------|
| `selector` | CSS‑style tag used in templates (`<app-user>`) |
| `templateUrl` / `template` | HTML view (inline or external) |
| `styleUrls` / `styles` | Scoped CSS/SCSS |
| `providers?` | Component‑local services (optional) |
| `changeDetection` | Strategy (`Default`, `OnPush`) – influences performance |

The class may implement lifecycle hooks:  
- `ngOnInit()` – init logic after constructor.  
- `ngOnChanges()` – react to `@Input` changes.  
- `ngAfterViewInit()`, etc.

A component must be **declared** in an NgModule’s `declarations`. It can then be used in other components’ templates or bootstrapped directly via the `bootstrap` array of the root module.  

Typical usage:  

```ts
@Component({
  selector: 'app-counter',
  template: `<button (click)="dec()">-</button>
             {{count}}
             <button (click)="inc()">+</button>`,
})
export class CounterComponent implements OnInit {
  @Input() start = 0;
  @Output() change = new EventEmitter<number>();
  count!: number;

  ngOnInit() { this.count = this.start; }

  inc() { this.update(1); }
  dec() { this.update(-1); }

  private update(delta: number) {
    this.count += delta;
    this.change.emit(this.count);
  }
}
```

**Edge Cases**  
- Forgetting to declare the component → runtime “Component is not part of any NgModule” error.  
- Using `ChangeDetectionStrategy.OnPush` without mutating references can cause UI staleness.  
- Circular dependencies in providers lead to injection errors.

**Optimize & Communicate**  
For large apps, keep components thin: delegate heavy logic to services; use `OnPush` for performance; lazy‑load modules to reduce bundle size. When explaining this to interviewers, frame it as “Angular components are the composable UI primitives that bind declarative templates to imperative logic, and they must be declared, bootstrapped, and wired via inputs/outputs or dependency injection.” This demonstrates clear structure, technical depth, and awareness of best‑practice trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
