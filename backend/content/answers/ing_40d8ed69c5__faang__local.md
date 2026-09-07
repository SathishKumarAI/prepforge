---
qid: ing_40d8ed69c5__faang__local
question: What are the differences between promises and observables in Angular 8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 510
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:55-05:00'
sources: []
---

**Clarify**  
You’re asking how *Promises* (ES 6) differ from *Observables* (RxJS) when used in an Angular 8 context—e.g., HTTP calls, async data streams, or component lifecycles.

**Approach**  
1. List core characteristics of each.  
2. Highlight typical use‑cases in Angular services/components.  
3. Summarize trade‑offs and impact on code quality.

**Depth**  

| Feature | Promise | Observable |
|---------|---------|------------|
| **Eager vs Lazy** | Executes immediately upon creation. | Starts only when subscribed. |
| **Multiple emissions** | Resolves once → single value or error. | Can emit many values over time (stream). |
| **Cancellation** | No built‑in cancel; must rely on external flags. | `unsubscribe()` stops the stream cleanly. |
| **Composition operators** | Limited (`then`, `catch`). | Rich API (`map`, `filter`, `debounceTime`, etc.). |
| **Error handling** | Single error path; propagates to `.catch`. | Errors can be caught per emission via `catchError`; stream can recover. |
| **Memory leaks** | Less concern after resolution, but async callbacks may linger. | Requires explicit unsubscription (e.g., `takeUntil` with `ngOnDestroy`). |
| **Interoperability** | Native JavaScript; no extra libs. | RxJS needed; Angular’s HTTPClient returns Observables by default. |

**Edge Cases**  
- *Race conditions*: Promise resolves after component destroyed → silent failure. Observable auto‑cancels on unsubscription.  
- *Backpressure*: Promises cannot pause; Observables can buffer/skip with operators (`buffer`, `throttle`).  

**Optimize & Communicate**  
In Angular, favor **Observables** for any async data that may change or need cleanup (HTTP, WebSocket, form value changes). Use Promises only for single‑shot, one‑time operations where cancellation isn’t needed. When switching to Observables, remember to pipe `takeUntil(this.destroy$)` in components and use `async` pipe in templates for automatic subscription management.

*Signal to interviewers:* structured comparison, concrete table, clear trade‑offs, practical Angular guidance—all within the word limit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
