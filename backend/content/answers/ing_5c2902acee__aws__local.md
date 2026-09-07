---
qid: ing_5c2902acee__aws__local
question: 'Explain: sort between two ranges of keys means — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 552
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:30-05:00'
sources: []
---

**Situation & Task**  
At DoorDash I led a project to rank delivery drivers by proximity for the “Nearby” UI. The requirement was to return the top‑k drivers whose latitude/longitude fell within two bounding boxes (e.g., 0–5 km north/south and 0–3 km east/west of the rider). We had to do this in real time, scale to millions of concurrent riders, and keep costs under $1M/year.

**Action & Design**  
I chose **Geo‑Hashing** (H3) to bucket coordinates into fixed‑size cells. Each driver’s location was written to an **Amazon DynamoDB Global Table** with a composite key: `geo_hash#driver_id`. For real‑time updates we used **AWS IoT Core** + **WebSocket API Gateway** so drivers pushed their GPS every 5 s; the edge device updated DynamoDB via Lambda.  
To answer range queries I built an **Elasticsearch domain** (Amazon OpenSearch) indexed by `geo_hash` and `timestamp`. A scheduled Lambda ran nightly to materialize a read‑optimized table (`GeoRangeCache`) in S3, partitioned by day. Rider requests hit API Gateway → Lambda that queried the cache with a bounded GeoHash range filter and returned the top‑k sorted by distance (Haversine formula).  
**Scalability & Availability** – DynamoDB provides single‑digit latency at 10k RCU; OpenSearch scales horizontally, and S3 is durable. We used **AWS WAF** to protect the WebSocket endpoint.  
**Cost** – At peak 50 k concurrent riders we stayed under $900K/year: 1.2 M RCU (≈$70K), OpenSearch cluster ($200K), Lambda invocations ($30K), and S3 storage ($10K).

**Result & Learning**  
We cut driver‑rider latency from 250 ms to <80 ms, increasing order volume by **18% YoY** in the “Nearby” segment. I documented the failure modes (stale GeoHash drift) and introduced a self‑healing Lambda that verifies consistency nightly, which reduced outliers by 99%.  

> **Leadership Principles:** *Customer Obsession* – delivering a faster, more reliable UI; *Dive Deep* – architecting a robust geo‑indexing pipeline; *Ownership* – owning the end‑to‑end data flow and post‑deployment monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
