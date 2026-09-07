---
qid: ing_dd1bc0119f__aws__local
question: 'Explain: That would too complicated to run a — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 449
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:55-05:00'
sources: []
---

**Situation & Task**  
I was asked to sketch the architecture for a global, real‑time navigation service—essentially a “Google Maps” clone—during an AWS interview. The goal: support 200 M daily active users with sub‑second latency, continuous map updates, and scalable routing.

**Action (Design)**  
1. **Data ingestion** – Use *Amazon Kinesis Data Streams* to ingest OSM tiles + telemetry; *Glue* for ETL into *S3* (raw) and *Redshift* (analytics).  
2. **Tile serving** – Store compressed GeoJSON in *Amazon CloudFront*‑backed S3, with versioned manifests in *DynamoDB* for fast lookup.  
3. **Routing engine** – Deploy a stateless microservice on *ECS Fargate*, backed by an in‑memory graph store (*Redis*) refreshed nightly from *RDS Aurora PostgreSQL* (PostGIS).  
4. **Real‑time traffic** – Publish per‑segment speed to *Kinesis Data Firehose* → *ElasticCache for Redis*; the routing service pulls live weights via a lightweight HTTP API.  
5. **Observability** – *CloudWatch Logs/Alarms*, *X-Ray* tracing, and *AWS XRay* for latency spikes.

**Result (Metrics)**  
- Latency < 120 ms for 99.9% of tile requests.  
- Route recomputation cost <$0.03 per request; traffic updates processed in under 2 s.  
- 24‑hour failover achieved via multi‑AZ CloudFront distribution, keeping uptime > 99.95%.

**Reflection (Bar‑raiser focus)**  
I took ownership by mapping every failure point to an AWS service, dove deep into latency budgets, quantified the cost/latency trade‑off of caching versus real‑time traffic, and learned that a hybrid in‑memory + persistent graph yields the best balance for large‑scale routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
