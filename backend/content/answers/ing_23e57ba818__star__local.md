---
qid: ing_23e57ba818__star__local
question: 'Explain: Latency Budget — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 382
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:51-05:00'
sources: []
---

**Situation** – In my last role at a video‑streaming startup, our recommendation engine served personalized playlists to 12 million daily active users. A recent spike in traffic pushed the average recommendation latency from 120 ms to 250 ms, and we risked breaching the SLA that promised sub‑200 ms responses for 99.5 % of requests.

**Task** – I was tasked with tightening the latency budget without sacrificing recommendation quality or increasing infrastructure cost by more than 15 %.

**Action** – First, I instrumented the pipeline with OpenTelemetry to isolate the slowest stages: feature extraction (CPU‑bound), model inference (GPU‑bound), and post‑processing. Using a microbenchmark on our training data, I identified that GPU memory fragmentation was inflating inference time by 70 ms per request. I refactored the batch scheduler to reuse GPU contexts and introduced TensorRT optimizations for the Transformer model, cutting inference latency by 35 %. For feature extraction, I migrated the most expensive sub‑graph to a lightweight Rust service and deployed it on Spot instances with autoscaling rules tied to traffic patterns.

**Result** – The end‑to‑end recommendation latency dropped to an average of 135 ms, keeping 99.7 % of requests under 200 ms while maintaining the same hit‑rate (47 % vs. 46.5 %). Costs increased by only 9 %, and I documented a reusable latency‑budget framework that is now part of our CI/CD pipeline. This experience taught me how to blend observability, profiling, and targeted optimizations to meet strict real‑time constraints in large‑scale AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
