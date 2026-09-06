---
qid: ing_47dc3e2511__fp__local
question: 'Explain: Latency vs throughput — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 362
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:10-05:00'
sources: []
---

**Latency vs. Throughput: The Two Sides of a System’s Capacity**

At its core, any distributed system is an *information‑processing pipeline*: data arrives, it traverses a sequence of transformations, and the result is returned.  
*Latency* measures **how long a single datum takes to traverse that pipeline**; *throughput* counts how many datums can be processed per unit time.

Why must they behave this way?  
- Latency is governed by the *critical path*: the longest chain of dependent operations. Even if all other stages run in parallel, a slowest link throttles every request.  
- Throughput depends on *parallelism* and *resource sharing*. If you can split work across many workers or cache results, you process more items per second, but each item still pays the critical‑path cost.

In machine‑learning inference, this trade‑off surfaces sharply: a GPU batch size of 32 reduces latency (each sample is processed quickly) while increasing throughput (more samples per second). Yet, larger batches also increase memory pressure and can push the system past its bottleneck (e.g., PCIe bandwidth), raising overall latency.

**Non‑obvious insight:** *Latency is a function of variance, not just mean.* A highly deterministic pipeline with low variance will have stable latency even if its average processing time is higher. In contrast, a pipeline with occasional spikes can yield a respectable throughput but disastrous latency for real‑time workloads. Designing for low‑variance operations (e.g., using pre‑compiled kernels, avoiding contention) often yields better user experience than simply chasing raw throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
