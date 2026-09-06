---
qid: ing_62bb64f464__fp__local
question: 'Explain: Design a serverless inference platform serving 100+ open models
  on a shared GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 429
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:35:09-05:00'
sources: []
---

### Why the problem is hard  
A single GPU can only run a few models at once; each model has its own memory‑footprint, batch size, and latency constraints. Serving **100+** open models demands *dynamic resource allocation* without over‑committing or under‑utilizing the fleet. The key challenge: **maximise throughput while respecting per‑model SLAs in a serverless (stateless) environment**.

### Core principle – *online convex packing*  
Treat each inference request as an item that must be packed into a GPU’s memory bin. The packing problem is NP‑hard, but online greedy algorithms with **weighted fairness** approximate the optimum:  
1. **Weight = 1 / (model’s expected latency × memory requirement)**.  
2. When a request arrives, place it on the GPU where the *incremental cost* (increase in total weighted completion time) is minimal.

This mirrors **resource‑aware scheduling** from convex optimization: we solve a relaxed linear program each batch and then round to integer assignments.

### Serverless glue – *stateless function shards*  
Each model runs inside an isolated Lambda‑like container that pulls the latest weights from object storage. The scheduler (a lightweight, always‑on service) exposes a **token‑based queue**; when a token arrives, it selects a GPU via the greedy rule and hands off the request to the corresponding shard. Shards are short‑lived, so scaling is instant.

### Non‑obvious insight  
The *memory fragmentation* problem can be mitigated by **pre‑packing complementary models together** (e.g., a small transformer with a lightweight tokenizer). By learning co‑occurrence patterns offline and embedding them into the scheduler’s weight matrix, we reduce cache misses and improve GPU utilization beyond naïve per‑model isolation.

This design unifies online convex packing with serverless elasticity, yielding a platform that scales to hundreds of models while guaranteeing SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
