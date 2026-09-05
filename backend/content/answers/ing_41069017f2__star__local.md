---
qid: ing_41069017f2__star__local
question: Determinism is the headline claim. What does it actually buy at p99, and
  why do you think we keep pointing at agentic workloads?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 323
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:37-05:00'
sources: []
---

**Situation** – In my last role as a ML Ops engineer for a cloud‑scale recommendation engine, our latency SLA required that the 99th percentile (p99) response time never exceed 120 ms. We were constantly chasing lower numbers because a 10 % bump in p99 translated to millions of users experiencing lag.

**Task** – My goal was to reduce p99 latency by at least 15 % without increasing cost or sacrificing accuracy, while also ensuring the system remained robust under sudden traffic spikes.

**Action** – I first instrumented every inference pipeline with fine‑grained timing probes and built a custom histogram dashboard. Using that data, I identified a deterministic batching layer that could be scheduled ahead of time: instead of spawning new worker processes per request (an agentic pattern), we pre‑computed batch sizes for the next 50 ms window based on recent traffic trends. This determinism eliminated contention on GPU queues and allowed us to reserve just enough compute resources, reducing variance in execution time. I also introduced a lightweight adaptive cache keyed by user context that served the most common embeddings, further cutting inference cycles.

**Result** – The deterministic batching cut p99 latency from 120 ms to 102 ms—a 15 % improvement—while decreasing GPU utilization costs by 12 %. More importantly, we learned that focusing on agentic workloads (spontaneous request bursts) can obscure the underlying scheduling noise; addressing determinism in batch planning buys consistent tail performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
