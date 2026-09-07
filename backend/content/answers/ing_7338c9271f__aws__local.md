---
qid: ing_7338c9271f__aws__local
question: 'Explain: Redis - Diagnosing latency issues — Redislatencybenchmarking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 508
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:09-05:00'
sources: []
---

**Situation / Task**  
At my previous role we saw a 40 % spike in request latency for our recommendation engine that was backed by **ElastiCache Redis**. The SLA required <200 ms, but users were reporting 600–800 ms during peak hours.

**Action (Technical)**  
1. **Baseline Benchmarking** – Ran `redis-benchmark -n 10M -t get,set` against a single node to capture mean/99th percentile latency and memory usage.  
2. **Latency Monitoring** – Enabled Redis `LATENCY DOCTOR` and exported metrics to **CloudWatch**; added a CloudWatch alarm on the 95th percentile exceeding 250 ms.  
3. **Cluster Scaling & Sharding** – Migrated from a single node to a **Redis Cluster** with 6 shards, each on an R5.large instance, to distribute keyspace and reduce per‑node load.  
4. **Parameter Tuning** – Reduced `maxmemory-policy` to `volatile-lru`, increased `tcp-keepalive` and lowered `latency-monitor-threshold`.  
5. **Cost/Availability Trade‑off** – Switched from on‑demand to Reserved Instances, saving ~30 % annually while maintaining Multi-AZ support for 99.95 % availability.

**Result**  
Post‑deployment latency dropped from 700 ms to **140 ms (80 % reduction)** and the 95th percentile fell below SLA thresholds. CloudWatch alarms ceased after 48 h, and the recommendation feature’s throughput rose by 1.5× without additional cost.

---

### Leadership Principles Anchored  
- **Customer Obsession** – Eliminated user‑visible delays that hurt engagement.  
- **Ownership / Dive Deep** – Conducted end‑to‑end latency analysis, tuned cluster parameters, and iterated until metrics met SLA.  

*Bar‑raiser notes:* Clear ownership of the issue, deep dive into benchmarks, quantified impact (latency %, cost savings), and a lesson learned—continuous monitoring is essential to pre‑empt performance regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
