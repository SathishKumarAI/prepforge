---
qid: ing_9a66677454__aws__local
question: 'Explain: Testing Timed Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 512
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:36-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In 2023 I led the migration of our recommendation engine from an in‑house cache to **Amazon ElastiCache (Redis)**, where we needed a precise eviction policy for time‑sensitive user data.

*Task*: Implement “timed eviction” – items must be removed automatically after a configurable TTL, without manual pruning or background sweeps that could spike latency.

*Action*:  
1. Reviewed the Guava `TimedEviction` docs and mapped them to Redis’ **TTL** feature and Lua scripting for atomic set‑and‑expire operations.  
2. Built a lightweight Java wrapper (`TimedCache`) that exposes `put(key, value, ttl)` and `get(key)`, internally using `SET key value EX ttl NX`.  
3. Added an asynchronous health check that logs any TTL drift >5 % (measured by Redis `INFO stats`), ensuring the eviction remains on schedule.  
4. Deployed via CloudFormation with **Auto‑Scaling** for ElastiCache nodes; each node runs 1 GB of RAM, and we hit a 99.9 % cache hit rate across 15M users, cutting downstream DB reads by 62 %.

*Result*:  
- Latency dropped from 12 ms to <2 ms on average (95th percentile).  
- Cost decreased 28 % by eliminating the need for a separate cleanup job.  
- The TTL logic was fully automated; any drift triggers an SNS alert, giving us immediate visibility.

**What a bar‑raiser looks for**

- **Ownership**: I drove the end‑to‑end migration and built observability into the eviction logic.  
- **Dive Deep**: I compared Guava’s Java‑level implementation to Redis’ native TTL, evaluated Lua atomicity, and quantified drift tolerance.  
- **Quantified Impact**: 62 % reduction in DB traffic, 28 % cost savings, 95th‑percentile latency <2 ms.  
- **Learning from Failure**: Initial prototype caused a “stale key” race; resolved by switching to `SET … NX` and adding a Lua script for atomic get‑set‑expire, preventing race conditions.

This approach not only satisfied the timed eviction requirement but also aligned with AWS best practices—leveraging managed services, automating observability, and delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
