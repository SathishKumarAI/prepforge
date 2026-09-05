---
qid: ing_ca4dbef6d2__star__local
question: 'Explain: What does that really mean? Let’s go — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 420
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:48-05:00'
sources: []
---

**Situation:**  
At my previous company we were tasked with launching a new feature: real‑time restaurant recommendations for users on the go, similar to Yelp’s “near me” search. Our existing backend could handle static POI data but not dynamic user proximity or high query volume.

**Task:**  
Design an end‑to‑end system that ingests millions of place records, supports sub‑second nearest‑neighbor lookups for millions of concurrent users, and scales cost‑effectively while keeping latency under 200 ms even during peak traffic (≈10k QPS).

**Action:**  
I chose a hybrid architecture:  
- **Data ingestion** used Apache Kafka streams to batch upload place metadata into a distributed geohash index stored in Elasticsearch for fast text + geo filtering.  
- For proximity, I built a sharded R‑Tree layer on top of Redis‑Cluster (using RediSearch module) that cached the most popular 1 M places per region and served 90% of queries directly from memory.  
- The API gateway (NGINX + Envoy) routed requests to regional microservices written in Go, each exposing a gRPC endpoint that performed a two‑step lookup: first a geohash prefix filter, then an exact distance calculation using Haversine formula in C++ for speed.  
- I added a fallback batch job on AWS Lambda that refreshed stale cache entries every 5 minutes and logged latency metrics to Grafana.

**Result:**  
The service achieved <150 ms average latency at peak load with 99.9% uptime, handling 12k QPS during our beta launch. User engagement increased by 23%, and the cost per request dropped 18% compared to our monolithic prototype. I learned how to balance in‑memory caching with distributed search to meet strict SLAs while keeping operational costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
