---
qid: ing_ed70d4fa18__aws__local
question: 'Explain: Leaderboard high-level design — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 494
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:13-05:00'
sources: []
---

**Situation / Task** – At my last role I led the redesign of a global e‑sports leaderboard that served >10 M concurrent players and needed <200 ms ranking look‑ups. The existing monolith was hitting 400 RPS throttles on DynamoDB, and latency spikes were hurting player retention.

**Action** –  
1️⃣ **Event Ingestion:** Scores streamed via *Amazon Kinesis Data Streams* → *Lambda* (stateless) for idempotent processing.  
2️⃣ **Storage & Ranking:** Persisted in *DynamoDB* with a GSI on `score` (`HASH=game_id`, `RANGE=score DESC`). Each item also contains `rank_cache` updated by a background *Step Functions* workflow that runs every 5 s, writing top‑100 to *ElastiCache Redis* (partitioned per game).  
3️⃣ **API Layer:** Low‑latency read API on *API Gateway + Lambda@Edge* pulls from Redis; fallback to DynamoDB if cache miss.  
4️⃣ **Cost & Availability:** Kinesis shards auto‑scaling, DynamoDB provisioned throughput with on‑demand backup, and Redis Multi-AZ for 99.999 % availability.  

**Result** – Latency dropped from 350 ms to 120 ms (50 % win), RPS capacity grew to 15k/second without throttling, and operational cost fell by 30 %. I introduced a nightly “rank‑audit” job that surfaced stale entries; after fixing the dedup logic we reduced duplicate rank errors from 4.2 % to <0.1 %.

**Leadership Principles Reflected** – *Ownership* (full end‑to‑end delivery), *Dive Deep* (profiling, cache invalidation strategy), *Bias for Action* (quick Kinesis migration), and *Deliver Results* (quantified performance & cost gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
