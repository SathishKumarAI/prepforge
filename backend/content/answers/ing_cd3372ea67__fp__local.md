---
qid: ing_cd3372ea67__fp__local
question: 'Explain: What OpenAI asks in the on-site system design round'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 384
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:16:33-05:00'
sources: []
---

## The Core Problem

OpenAI wants you to **design a scalable, safe, and cost‑efficient AI inference service** that can serve millions of requests per day with minimal latency while respecting privacy and policy constraints.

### Why It Must Look This Way

1. **Latency vs Throughput Trade‑off**  
   *Inference* is an online workload: each request must be answered within a few hundred milliseconds, yet the system must handle thousands of concurrent queries. The design must balance CPU/GPU utilization against queue depth—otherwise you’ll either have stale responses or idle resources.

2. **Safety & Moderation Layers**  
   Every inference must pass through content filters and usage‑policy checks before reaching the model. This introduces a multi‑stage pipeline that must be **fault‑tolerant** (a filter failure shouldn’t crash the entire system) and **audit‑friendly** (log every step for compliance).

3. **Cost Control**  
   GPU hours are expensive. The design should include *model caching*, *batching*, and *dynamic scaling* so that idle GPUs spin down while still meeting SLA.

### One Non‑Obvious Insight

Most candidates focus on horizontal scaling, but the **real bottleneck is the “cold start” of large language models**. A single GPU can serve many requests only if the model weights are already resident in memory. The system must therefore include a *persistent model store* that keeps frequently used checkpoints warm across restarts—an often overlooked but critical component for both latency and cost.

By framing the problem around these principles, you demonstrate not just engineering chops but also an understanding of how AI systems trade performance, safety, and economics in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
