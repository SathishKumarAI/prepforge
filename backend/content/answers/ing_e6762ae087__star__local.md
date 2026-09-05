---
qid: ing_e6762ae087__star__local
question: 'Explain: Push versus pull and consequences — Asynchronous computing at
  Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 290
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:58-05:00'
sources: []
---

**Situation** – At Meta’s AI research lab I was tasked with scaling a recommendation engine that served millions of users in real time. The existing pipeline pulled model scores from a central GPU cluster on every request, which caused spikes and latency during peak hours.

**Task** – Redesign the inference flow to decouple user traffic from heavy computation, ensuring sub‑200 ms response times while keeping CPU usage below 70%.

**Action** – I introduced an asynchronous “push” architecture: model updates were precomputed and pushed into a distributed cache (Redis) during off‑peak windows. The front‑end served cached scores instantly, pulling new batches only when the push cycle refreshed. We implemented backpressure using Kafka to throttle push rates and added a lightweight fallback that pulled from GPU shards if cache miss occurred. I also instrumented metrics in Prometheus to compare queue depths between pull and push modes.

**Result** – Latency dropped from 350 ms average to 140 ms, while CPU load fell by 35%. Cache hit rate exceeded 98%, eliminating the peak‑time bottleneck. The key takeaway: pushing heavy computations ahead of demand turns a reactive system into a proactive one, but requires careful backpressure and cache consistency strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
