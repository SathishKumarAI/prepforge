---
qid: ing_1bea1e87a1__star__local
question: 'Explain: Step 7: Run on All Traces at Scale — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 348
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:10-05:00'
sources: []
---

**Situation** – In late‑2023 I led the rollout of a new AI model for our customer support chatbot. The pilot had shown 87 % intent recognition, but we needed to validate it across millions of live chat logs before production.

**Task** – My goal was to run the evaluation on every trace in our production dataset (≈12 M conversations) while keeping latency under 2 s per request and staying within the GPU budget.

**Action** – I first sharded the data into 120 batches, each stored in an S3 bucket. Using Ray Serve, I spun up 40 parallel inference workers on a Spot‑Instance fleet (p4d.24xlarge). Each worker fetched its batch from S3, ran the model with ONNX Runtime for faster CPU fallback when GPU memory was saturated, and streamed results back to a central ClickHouse table. To avoid double‑counting errors, I implemented a deterministic hash on conversation IDs as a de‑duplication key. For monitoring, I built Grafana dashboards that plotted throughput, error rates, and latency in real time.

**Result** – The full evaluation completed in 18 minutes, achieving an overall precision of 90.3 % and recall of 88.7 %. We discovered a 2‑point drop in intent accuracy for Spanish conversations, prompting a targeted fine‑tune that lifted performance to 93 %. The exercise taught me the importance of data sharding, dynamic resource allocation, and real‑time observability when scaling AI evals across production traces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
