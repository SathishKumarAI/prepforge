---
qid: ing_0ef9d5291b__aws__local
question: 'Explain: Testing our new endpoint — Building a Performant API using Go
  and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 520
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:27-05:00'
sources: []
---

**Situation & Task**

At my previous role, we launched a recommendation engine for an e‑commerce platform. The ML model was wrapped in a Go HTTP service that pulled user vectors from Cassandra. The team needed a **high‑throughput API (≥ 10k QPS)** with sub‑200 ms latency while keeping costs < $2k/month.

**Approach & Design**

1. **Stateless Go Service** – compiled to a single binary, containerized on ECS Fargate.  
2. **Cassandra Query Layer** – read‑optimized cluster (3 DCs, 5 nodes each), using prepared statements and the DataStax driver with `ConsistencyLevel.ONE`.  
3. **Caching** – in‑process LRU cache for the top 1 M user vectors; fallback to Redis (ElastiCache) for hot keys.  
4. **Load Balancing & Auto‑Scaling** – Application Load Balancer + target group health checks, ECS service with CPU‑based scaling.  
5. **Observability** – CloudWatch metrics (`latency_ms`, `cassandra_latency_ms`), X-Ray tracing to pinpoint slow queries.

**Results**

| Metric | Pre‑build | Post‑deploy |
|--------|-----------|-------------|
| QPS | 3,200 | **12,500** (↑ 290%) |
| Avg latency | 350 ms | **155 ms** (↓ 56%) |
| Cost | $4,300/mo | **$1,750/mo** |

The API hit the target while staying under budget.  
We also discovered a bottleneck in Cassandra’s `SELECT` on a non‑indexed column; adding a materialized view reduced query latency by 40%.

**Reflection (Bar‑raiser cues)**

- *Ownership*: I drove end‑to‑end delivery, from design to cost control.  
- *Dive Deep*: Analyzed trace data, identified the Cassandra issue, and validated fixes in staging before prod.  
- *Quantified Impact*: Demonstrated clear lift in QPS and latency with concrete numbers.  
- *Learning from Failure*: The initial failure of a single‑node cluster taught us to architect for multi‑DC resilience.

**Leadership Principles Highlighted**

- **Customer Obsession** – Delivering fast, reliable recommendations directly improves user satisfaction.  
- **Ownership & Dive Deep** – Taking full responsibility and digging into the root cause of performance issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
