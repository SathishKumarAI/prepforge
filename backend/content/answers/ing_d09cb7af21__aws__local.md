---
qid: ing_d09cb7af21__aws__local
question: 'Explain: GoLang — How does Garbage Collection work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 404
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:37-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** While leading the ML inference micro‑service team for a real‑time recommendation engine, we noticed CPU spikes during peak traffic that caused latency to exceed our SLA of 50 ms.  
> **Task:** I needed to identify the root cause and reduce GC pauses without adding infrastructure cost.  
> **Action:**  
> * **Dive Deep** into Go’s generational mark‑compact collector: it runs every ~100 ms, pausing all goroutines for a few milliseconds.  
> * Implemented a **tiered allocation strategy**—small objects (< 1 KB) live in the young generation and are promoted only if they survive three GC cycles.  
> * Added **runtime/pprof profiling** to confirm that half of the heap was occupied by short‑lived request structs.  
> * Replaced those structs with a **pool of pre‑allocated buffers** (sync.Pool) so allocation hits the young generation less frequently.  
> * Used **AWS Lambda layers** for shared ML model artifacts, reducing per‑invocation memory usage from 250 MiB to 120 MiB.  
> * Monitored GC pause times with CloudWatch metrics; achieved a 70 % drop in average pause (from 5 ms to 1.5 ms) and improved request latency by 35 %.  

**Result:** Latency consistently stayed below 45 ms during 10× traffic spikes, and we avoided adding extra EC2 instances—saving ~$3k/month.  
**Leadership Principles:** *Customer Obsession* (meeting SLAs), *Ownership* (owning the entire stack from code to metrics), *Dive Deep* (profiling and GC internals).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
