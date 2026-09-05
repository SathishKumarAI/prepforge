---
qid: ing_40d8ed69c5__star__local
question: What are the differences between promises and observables in Angular 8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:15-05:00'
sources: []
---

**Situation:** While leading the migration of our legacy AngularJS dashboard to Angular 8, we noticed that the real‑time stock ticker was sluggish and occasionally stalled because it relied on a single HTTP call wrapped in a Promise.

**Task:** I needed to refactor the data stream so users could see live updates without page reloads, while keeping the code maintainable and testable.

**Action:** I replaced the Promise with an RxJS Observable pipeline. The service now uses `HttpClient.get` returning an Observable that I pipe through `retryWhen`, `switchMap`, and a `Subject` to emit new data every 2 seconds. I also added `shareReplay(1)` so multiple components subscribe without triggering duplicate requests, and used the async pipe in templates for automatic subscription management. Compared to Promises—one‑shot, callback‑based, blocking—I leveraged Observables’ lazy execution, cancellation (`takeUntil`), backpressure handling, and operators for transformation.

**Result:** The ticker’s latency dropped from ~1 s to <200 ms, and the error rate fell by 70%. Users reported smoother scrolling and no stale data. I learned that Promises are fine for single async results, but Observables excel when you need streams, composability, and fine‑grained control over resource cleanup in Angular.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
