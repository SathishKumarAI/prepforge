---
qid: ing_7a7ef36924__star__local
question: 'Explain: Tech Decisions — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:05-05:00'
sources: []
---

**Situation** – While leading the data‑engineering team at a fast‑growing photo‑sharing app (≈ 30 M daily active users), our recommendation engine was hitting latency bottlenecks during peak traffic; user engagement metrics dropped 12 % after a major feature rollout.

**Task** – I needed to redesign the recommendation pipeline so that inference time stayed under 200 ms per request, without compromising model accuracy or increasing operational costs.

**Action** – First, I profiled the existing monolithic service using PyTorch’s TorchScript and identified redundant CPU‑bound preprocessing steps. I then refactored the pipeline into a set of lightweight microservices orchestrated by Kubernetes, each handling a distinct stage (feature extraction, embedding lookup, scoring). To reduce data transfer overhead, I swapped REST for gRPC and introduced a shared in‑memory cache (Redis) for hot embeddings. For model serving, I migrated from TorchServe to NVIDIA Triton, enabling GPU inference with dynamic batching. Finally, I set up Prometheus alerts to monitor latency per stage.

**Result** – Latency dropped from 450 ms to 135 ms during peak hours, lifting user engagement back to +5 % YoY and reducing infrastructure spend by 18 %. The exercise taught me that micro‑optimization in the right places—profiling, caching, and choosing the right inference framework—can deliver measurable business impact without overhauling the entire stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
