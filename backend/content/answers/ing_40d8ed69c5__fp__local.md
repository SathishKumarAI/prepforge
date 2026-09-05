---
qid: ing_40d8ed69c5__fp__local
question: What are the differences between promises and observables in Angular 8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 451
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:35-05:00'
sources: []
---

In Angular 8 the two most common async primitives—**Promises** and **Observables**—are not just syntactic sugar; they encode fundamentally different models of information flow.

| Aspect | Promise | Observable |
|--------|---------|------------|
| **Source model** | *Eager, one‑shot* – the computation starts immediately and resolves once. | *Lazy, stream* – nothing happens until a subscriber attaches, and the producer can emit zero or many values over time. |
| **Cancellation** | No built‑in cancellation; you must use `AbortController` or similar. | Supports explicit teardown via the returned Subscription’s `unsubscribe()`. |
| **Composition** | Limited to chaining (`then`, `catch`). | Rich combinators (`map`, `mergeMap`, `filter`, etc.) that respect backpressure and can be combined declaratively. |
| **Error handling** | A single rejection path; any error aborts the chain. | Errors are part of the stream; you can recover or continue with other streams. |

### Why this matters

From an **information‑theoretic** viewpoint, a Promise is a *single bit* of future knowledge: “this value will arrive once.” An Observable is a *sequence* of bits that may be infinite and can convey temporal structure (think of time‑series). The ability to cancel or pause a stream reflects the principle of **resource conservation**—you don’t want to keep computing data you’re no longer interested in.

### Non‑obvious insight

Most developers treat Observables as “Promises with multiple values.” In reality, an Observable is also *a producer* that can decide when and how often to emit. Because of this, you can embed **backpressure** logic (e.g., `bufferTime`, `throttle`) so the consumer never gets overwhelmed—something a Promise cannot provide.

So, choose a Promise for a single, eager result; choose an Observable when you need lazy, cancellable, composable streams that respect time and resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
