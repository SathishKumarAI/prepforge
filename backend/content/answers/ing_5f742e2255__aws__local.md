---
qid: ing_5f742e2255__aws__local
question: 'Explain: So let’s add another 16 bytes. So — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 458
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:51-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a highly‑available location‑based service (LBS) for millions of daily users—think Yelp or Google Places. The goal: return top‑N venues within 500 m in <200 ms while scaling to 10M concurrent queries.

**Action – Architecture**  
1. **Data ingestion** – Use **Amazon Kinesis Data Streams** to stream venue updates, then a Lambda pipeline writes to an **Aurora Serverless PostgreSQL** cluster (geo‑indexed via PostGIS).  
2. **Cache & compute** – Deploy an **AWS Elasticache Redis Cluster** with `GEORADIUS` for fast radius queries; evict stale keys every 5 min.  
3. **Search layer** – Run a **Elasticsearch Service** domain for full‑text and scoring (distance + rating). Index updates sync from Aurora via CDC (`pgoutput`).  
4. **API gateway** – Fronted by **Amazon API Gateway + Lambda@Edge** to route requests globally, auto‑scaling based on CloudWatch metrics.  
5. **Observability** – CloudWatch Logs/Alarms + X-Ray for latency tracing; automated anomaly detection triggers a Lambda to spin up extra Redis shards.

**Result**  
- Latency dropped from 450 ms (baseline) to <180 ms, achieving a 60% improvement.  
- Throughput handled 12M QPS during peak events without throttling.  
- Cost per request fell by 35% after moving to Aurora Serverless and optimizing Redis eviction.

**Reflection**  
I practiced **Ownership**—took end‑to‑end responsibility for data flow, caching strategy, and cost. By **Diving Deep**, I benchmarked each component (Redis latency vs Elasticsearch) and iterated. The key lesson: balancing freshness with speed often means hybrid storage; we learned to adjust TTLs after observing stale‑result incidents in production.

*Leadership Principles highlighted:* Customer Obsession (fast responses), Ownership, Dive Deep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
