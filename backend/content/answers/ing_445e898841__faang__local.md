---
qid: ing_445e898841__faang__local
question: 'Explain: Web Browsers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 483
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:23:25-05:00'
sources: []
---

**Clarify**

The interview asks for a concise, technical explanation of *concurrency* versus *parallelism* in the context of web browsers (e.g., Chrome’s multi‑process architecture).  
Assumptions to confirm: we’re focusing on JavaScript execution and rendering threads; ignoring GPU off‑loading unless relevant.

**Approach**

1. Define each term generically.  
2. Map them onto browser internals (renderer, JS engine, layout).  
3. Contrast how the browser schedules work in practice.  
4. Highlight pitfalls/benefits.

**Depth**

- **Concurrency** = *“doing many things at once”*—tasks may interleave on a single CPU core via event loop ticks or cooperative multitasking. In browsers, the main thread processes events (input, paint, layout) one after another; JS callbacks are queued in the task queue and executed sequentially.
- **Parallelism** = *“doing many things truly at the same time”*—multiple cores execute independent tasks simultaneously. Chrome spawns separate renderer processes per tab and splits heavy work (e.g., CSS parsing, layout) across worker threads or dedicated compositor threads. Web Workers run JS in parallel without blocking the main thread.
- **Interaction**: Concurrency lets a single core handle many I/O events; parallelism exploits multi‑core CPUs to speed up CPU‑bound operations. The browser’s scheduler balances both—e.g., it may concurrently fetch resources while rendering, and parallelize layout on multiple threads.

**Edge Cases**

- *Race conditions* when two concurrent tasks modify shared state (DOM).  
- *Overhead*: context switches for too many threads degrade performance.  
- *Browser throttling* in background tabs limits concurrency to preserve battery life.

**Optimize & Communicate**

Explain that a well‑designed browser uses *asynchronous I/O* for high concurrency and *task parallelism* (renderer, compositor) for CPU bound work. Emphasize the trade‑off: more threads → higher latency if oversubscribed; fewer threads → underutilization of cores. Conclude by noting modern browsers expose `navigator.hardwareConcurrency` to guide worker creation, illustrating a pragmatic blend of both concepts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
