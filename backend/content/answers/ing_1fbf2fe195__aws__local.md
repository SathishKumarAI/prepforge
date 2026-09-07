---
qid: ing_1fbf2fe195__aws__local
question: 'Explain: Traffic and all other things will come — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 541
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:39:06-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a system that ingests real‑time traffic feeds (GPS traces, road sensors, user reports) and exposes “traffic‑and‑all‑other‑things” metrics to Google Maps. The goal: low latency, high availability, and the ability to serve millions of concurrent queries while keeping costs under control.

**Approach & Design**  
1. **Ingestion Layer** – Use **Apache Kafka** (or AWS MSK) as a durable, partitioned stream; each broker handles 10 k TPS with <50 ms latency.  
2. **Processing** – A stateless **Kafka Streams / Flink** job aggregates per‑segment speed and density every second, writes results to a time‑series store (**Amazon Timestream**) for fast range queries.  
3. **Storage & Indexing** – Persist the aggregated data in **DynamoDB Global Tables** (geo‑partitioned) for instant lookups; keep raw traces in **S3** for batch analytics.  
4. **Serving Layer** – Deploy a **Lambda@Edge** CDN that serves cached traffic tiles from **CloudFront**, invalidating every 30 s. For heavy queries, use an **ElastiCache Redis** cluster to store the last‑minute state (O(1) lookup).  
5. **Observability** – CloudWatch metrics + X-Ray tracing; auto‑scale Kafka and Lambda based on `bytes_in`/`latency`.

**Result**  
- Achieved 99.999% availability during a city‑wide event, with average query latency <12 ms.  
- Cost per 1M requests dropped from $0.15 to $0.07 by shifting from EC2‑based API gateway to Lambda@Edge.  

**Leadership Principles**  
*Customer Obsession*: Built the lowest‑latency path for real‑time navigation.  
*Ownership & Dive Deep*: I modeled failure scenarios (Kafka broker loss, DynamoDB throttling) and added retries/compensating actions.  

**Bar‑raiser notes**  
- Showed ownership by designing end‑to‑end flow and anticipating bottlenecks.  
- Demonstrated depth with specific service choices, trade‑offs, and cost calculations.  
- Quantified impact (latency & cost reductions).  
- Reflected on a past failure where missing TTL in DynamoDB caused stale traffic data; learned to enforce schema constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
