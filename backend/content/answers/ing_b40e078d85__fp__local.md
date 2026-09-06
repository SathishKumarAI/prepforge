---
qid: ing_b40e078d85__fp__local
question: Why doesn't my program run faster with more CPUs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 382
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:56-05:00'
sources: []
---

When you add a CPU you don’t simply get more “work per second” – you are adding another *resource* that must share the rest of the system (memory bus, cache, I/O).  
The fundamental problem is that any program can be split into two parts:  

1. **Parallelizable work** – tasks that can truly run on separate cores simultaneously.  
2. **Serial or shared‑state work** – loops that need a single core, synchronization primitives, or data that must fit in one cache line.

The speed‑up is bounded by the fraction *s* of serial work (Amdahl’s law). Even if *s* = 1 % and you have 32 cores, the theoretical maximum is  
\( \frac{1}{0.01 + \frac{0.99}{32}} \approx 13\times\) – far below a linear gain.

Beyond that, each core adds contention:

- **Memory bandwidth**: CPUs draw from the same DDR channel; once saturated, more cores stall waiting for data.
- **Cache coherence traffic**: Threads updating shared variables force invalidations and network hops between sockets.
- **Scheduling overhead**: The OS must time‑slice many threads, adding context‑switch cost.

A non‑obvious insight: *data locality matters more than thread count*. If your algorithm keeps its working set in a core’s L3 cache, extra cores provide little benefit; if it thrashes the main memory bus, more cores only worsen contention. Thus, profiling for cache misses and memory stalls often yields bigger gains than simply scaling CPU counts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
