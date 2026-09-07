---
qid: ing_588becf856__faang__local
question: 'Explain: Futures and Promises Pattern — Top 6 Multithreading Design Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 506
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:09:29-05:00'
sources: []
---

**Futures & Promises – the “Future‑Promise” multithreading pattern**  
*FAANG‑style structured answer (≈200 words)*  

---

### Clarify  
We need to explain how Futures and Promises enable asynchronous computation in concurrent systems, why they’re among the top 6 multithreading patterns, and what trade‑offs exist. Assume a language with built‑in concurrency primitives (Java `Future`, C++ `std::future/promise`, Python `asyncio.Future`).

### Approach  
1. **Define** the two actors: *Promise* (producer) supplies a value later; *Future* (consumer) represents that eventual value.  
2. **Show interaction**: thread A creates a Promise, spawns worker B, returns Future to caller. Thread C awaits or polls Future.  
3. **Highlight advantages**: decoupling of producer/consumer, non‑blocking waits, composability via callbacks or `thenApply`.  

### Depth  
- **Creation**: `Promise<T> p = new Promise<>();` → `Future<T> f = p.getFuture();`  
- **Fulfilment**: worker calls `p.set(value)` (or throws).  
- **Consumption**: `f.get()` blocks until value is ready; `f.thenApply(fn)` registers a continuation executed on completion.  
- **Complexity**: O(1) to create, O(n) if chaining n callbacks; memory overhead minimal.  
- **Thread‑safety**: promises are typically single‑set; futures support multiple readers.  

### Edge Cases  
- *Late fulfillment*: calling `set` after all consumers have timed out → lost value.  
- *Exceptions*: propagate via `f.exceptionally(...)`.  
- *Cancellation*: Future may be cancelled, requiring the worker to check `isCancelled()`.  

### Optimize & Communicate  
To reduce latency, use **non‑blocking** callbacks (`thenApplyAsync`) and thread pools for continuations. Explain that in high‑throughput services (e.g., Netflix API gateway), Futures let you compose IO + CPU work without blocking request threads, improving throughput by 3×.  

Conclude: Futures/Promises provide a clean, composable abstraction that decouples task scheduling from execution, making them indispensable for scalable multithreaded systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
