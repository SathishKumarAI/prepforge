---
qid: ing_23e57ba818__faang__local
question: 'Explain: Latency Budget — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 548
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:38-05:00'
sources: []
---

**Latency Budget – Recommendation Engine**

| Section | Content |
|---------|---------|
| **Clarify** | *Problem:* A recommendation system must deliver a ranked list within a strict latency budget (e.g., < 100 ms) while handling millions of users and items. <br>*Assumptions to confirm:* 1) Real‑time request/response cycle, 2) Data freshness requirements, 3) Scale of traffic, 4) Hardware constraints (CPU vs GPU), 5) Acceptable trade‑off between accuracy & latency. |
| **Approach** | 1️⃣ Profile the pipeline: data fetch → feature extraction → model inference → ranking. <br>2️⃣ Set a per‑stage budget (e.g., 20 ms for I/O, 30 ms for inference). <br>3️⃣ Identify bottlenecks with A/B profiling. <br>4️⃣ Optimize each stage (caching, pre‑computation, model distillation). |
| **Depth** | *Data Layer:* Use an in‑memory key‑value store (Redis) with sharded partitions; cache user & item embeddings for 1 s TTL. <br>*Feature Engine:* Pre‑compute static features offline; compute dynamic ones on a fast vectorized pipeline (Numba/Python). <br>*Inference:* Deploy lightweight models (e.g., LightGBM or distilled Transformer) behind a C++ inference server; batch requests in micro‑batches to amortize overhead. <br>*Ranking:* Use linear combination with learned weights; compute scores locally to avoid RPC. Complexity: O(k log k) for top‑k selection, negligible compared to I/O. |
| **Edge Cases** | • Cold‑start users/items → fall back to popularity baseline.<br>• Network hiccups → fallback to cached last‑known good response.<br>• Model drift → schedule nightly re‑training; deploy new weights via blue/green rollout without downtime. |
| **Optimize & Communicate** | *Improvements:* 1) Use SIMD and GPU inference for batchable queries. 2) Apply caching hierarchy (CPU cache → SSD → network). 3) Implement adaptive throttling when traffic spikes. <br>*Narration:* I’d present a latency waterfall chart, highlight the most expensive stages, then walk through incremental optimizations with measurable gains, always tying back to business impact (e.g., higher CTR from faster recommendations). |

*Word count: ~210 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
