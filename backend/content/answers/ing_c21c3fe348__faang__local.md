---
qid: ing_c21c3fe348__faang__local
question: 'Explain: Index by retention period — How many shards should I have in my
  Elasticsearch cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 453
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:17-05:00'
sources: []
---

**Clarify**  
You’re asked how to determine the number of primary shards for an ES index that will roll over after a given retention period (e.g., keep data for 30 days). The goal is to balance query latency, storage, and cluster stability while respecting the rollover policy.

**Approach**  
1. Estimate daily write volume (`docs/day` or `bytes/day`).  
2. Compute total data size: `size = docs/day × avg_doc_size × retention_days`.  
3. Pick a target shard size (≈ 30–50 GB for hot‑data).  
4. Derive the number of shards: `shards ≈ ceil(size / target_shard_size)`.  
5. Add 1–2 extra shards to absorb spikes and future growth.

**Depth**  
- **Example:** 10 M docs/day × 200 B/doc = 2 GB/day → 60 GB over 30 days.  
  Target shard ≈ 50 GB ⇒ `shards = ceil(60/50) = 2`.  
- Keep each node ≤ 3–4 shards to avoid “too many open files” and maintain fast indexing.  
- Use a rollover alias so the index can be swapped out after retention, keeping hot data on fewer nodes.

**Edge Cases**  
- Sudden traffic spikes → shard count too low → slow writes.  
- Large single documents → target size may be misleading; use `max_result_window` limits.  
- Disk capacity limits → reduce shards and increase target size cautiously.

**Optimize & Communicate**  
Explain that shard sizing is iterative: monitor GC, CPU, and query latency; adjust the target shard size or add nodes accordingly. Emphasize that a conservative start (≈ 1.5× expected usage) gives room for growth without immediate re‑sharding. This structured reasoning demonstrates clear problem framing, analytical planning, and readiness to refine based on operational data—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
