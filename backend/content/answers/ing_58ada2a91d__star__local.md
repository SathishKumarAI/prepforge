---
qid: ing_58ada2a91d__star__local
question: 'Explain: Practical Decision Framework — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:54-05:00'
sources: []
---

**Situation** – In my last role I led the redesign of a recommendation engine that served 2 M users per day. The latency had ballooned to 350 ms during peak traffic and our SLA was 200 ms, so we were at risk of losing customers.

**Task** – My job was to decide whether to scale vertically (upgrade GPUs, add memory) or horizontally (shard the model across more nodes) while keeping cost under a $100k/month budget.

**Action** – I started by profiling the inference pipeline: 65 % of time was spent on matrix multiplications, 25 % on data loading, and 10 % on post‑processing. I ran a benchmark on a single node with an NVIDIA A100 (32 GB) versus a cluster of four V100s (16 GB each). The A100 gave a 1.8× speedup but cost $4k per month; the cluster achieved 2.3× overall throughput for only $2.5k. I also introduced model pruning to cut FLOPs by 30% without hurting RMSE, and added an async data loader to reduce IO stalls.

**Result** – Switching to a horizontal micro‑service architecture with pruned models lowered latency to 180 ms, met the SLA, and saved $1.5k/month. I learned that profiling first, then testing both vertical and horizontal options, is key to making cost‑effective scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
