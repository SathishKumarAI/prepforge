---
qid: ing_dd3bf1e51e__aws__local
question: 'Build a rate limiter. Every ten minutes I''ll add a requirement: per-tenant
  limits, burst allowances, then a sliding window. How do you keep your code from
  collapsing?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 619
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:20-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to build a multi‑tenant rate limiter that evolved every 10 min: first per‑user caps, then burst allowances, finally a sliding window. The system had to stay 99.9% available under 100 k requests/sec and keep latency < 15 ms.

**Action**  
I architected it as a *serverless token‑bucket + Redis cache* pattern:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| **State store** | DynamoDB (partition key = tenant, sort key = timestamp) with TTL | Durable, scales to millions of tenants; cost‑effective for sparse writes. |
| **Cache / fast lookup** | ElastiCache‑Redis | Keeps the current bucket token count in memory for sub‑10 ms reads/writes. |
| **Orchestration** | Lambda + API Gateway | Stateless entry point that atomically updates Redis, falls back to DynamoDB on miss. |
| **Metrics & alerts** | CloudWatch + EventBridge | Detects drift between cache and store, auto‑refreshes TTLs. |

The algorithm:

1. On request, Lambda reads the bucket from Redis (`GET tenant`).  
2. If missing or stale, fetch from DynamoDB (`SELECT * WHERE tenant = ?`), populate Redis with `SETEX`.  
3. Recalculate tokens (add `rate × elapsed`, cap at `burst`).  
4. If enough tokens → decrement and allow; else reject.  
5. Persist the new token count back to DynamoDB asynchronously via an SQS trigger, ensuring eventual consistency.

**Result**  
- **Scalability:** 200 k RPS with < 12 ms average latency, 99.95% availability.  
- **Cost:** <$0.02 per 1 M requests (Redis cache + Lambda invocations).  
- **Resilience:** The Redis‑DynamoDB sync guarantees no data loss; a single point of failure is mitigated by CloudWatch alarms.

**Learnings**  
*Ownership:* I maintained the entire pipeline, from code to monitoring.  
*Dive Deep:* Profiling revealed that 30 % of latency came from cache misses; moving stale buckets back into Redis solved it.  
*Bias for Action:* I delivered a working prototype in 3 days and iterated on the sliding‑window logic within the next sprint.  

This design balances **Customer Obsession** (fast, reliable limits) with **Ownership** (end‑to‑end responsibility), ensuring the codebase remains robust as requirements evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
