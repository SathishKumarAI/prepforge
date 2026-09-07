---
qid: ing_2bbe25ba21__aws__local
question: 'Explain: KV Cache and Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 584
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:50-05:00'
sources: []
---

**Context:** I was leading a team that built an on‑prem LLM inference service for a financial client. Their latency SLA was <30 ms per request while supporting 10k concurrent users.

| Leadership Principle | How it guided my solution |
|-----------------------|---------------------------|
| **Customer Obsession** | The user’s real‑time trading decisions depend on sub‑10 ms responses. |
| **Ownership / Dive Deep** | I dissected the model’s compute graph, identified the repeated key–value (KV) lookups that dominated latency, and measured their cache hit ratios. |

### STAR

- **Situation:** Each request required a 2 kB KV matrix for context; recomputing it cost ~8 ms per inference.
- **Task:** Reduce per‑request latency while keeping memory usage <4 GB.
- **Action:** Implemented two layers of caching:

  1. **KV Cache** – An in‑memory LRU store (Amazon ElastiCache Redis) holding the KV tensors for the last *N* tokens, keyed by request ID and token offset. We serialized tensors to a compressed format (zstd) to keep memory overhead <0.5 GB.
  
  2. **Context Cache** – A pre‑computed embedding cache per user session stored in DynamoDB with TTL=30 s. The service first queried DynamoDB; on miss, it ran the encoder once and wrote back.

- **Result:** Latency dropped from 32 ms to **18 ms** (44 % reduction). Throughput increased by 35 %, and memory usage stayed below 4 GB. Cost savings were ~20 % per month versus a pure GPU‑based approach.

### Technical Takeaways

| Design Choice | AWS Service | Reasoning |
|---------------|-------------|-----------|
| In‑memory KV cache | **ElastiCache Redis** | Low‑latency, auto‑scaling, built‑in LRU eviction. |
| Session‑level context cache | **DynamoDB** | Serverless, managed TTL, high read throughput with minimal cost. |

### Bar‑Raiser Signals

- Demonstrated **ownership** by leading the end‑to‑end refactor.
- Showed **depth** through profiling and quantifying hit ratios.
- Quantified impact (44 % latency reduction, 35 % throughput gain).
- Learned from initial over‑engineering that added 1.2 GB of memory; we trimmed it via compression.

This approach balances speed, cost, and reliability—exactly what AWS customers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
