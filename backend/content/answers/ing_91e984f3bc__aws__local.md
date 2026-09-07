---
qid: ing_91e984f3bc__aws__local
question: 'Explain: Web crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 534
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:59-05:00'
sources: []
---

**Scenario (S)**  
While leading the data‑engineering team at a media startup, we needed to ingest millions of news articles daily to feed our recommendation engine. The existing crawler stalled on rate limits and duplicated URLs.

**Task (T)**  
Design a scalable, cost‑effective web‑crawler system that guarantees freshness, respects robots.txt, and avoids duplicates.

**Action (A)**  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| URL frontier | **Amazon SQS + DynamoDB Streams** | Decouple producers (seeders) from workers; stream deduplication via a Lambda that writes to a `seen` table. |
| Fetcher | **EC2 Spot Fleet + Auto Scaling** | Cost‑efficient compute, auto‑scales with queue depth; spot instances reduce spend by ~60 %. |
| Parsing & storage | **Lambda + Amazon S3 + Athena** | Serverless parsing keeps operational overhead low; raw HTML in S3 (1 TB/month) and parsed JSON in Athena for analytics. |
| Rate limiting & politeness | **API Gateway + Cognito** per domain | Enforces per‑domain throttling; ensures compliance with robots.txt. |

*Scalability*: Queue depth drives auto‑scaling; DynamoDB handles millions of keys with sub‑ms latency.  
*Availability*: Multi‑AZ deployments, S3’s 99.999 % durability.  
*Cost*: Spot fleet + Lambda reduces compute spend to <$1k/month versus $5k for on‑prem servers.

**Result (R)**  
Within two weeks we achieved **200 M page fetches/day** with <0.5 % duplicate rate, cutting crawl latency from 48 h to 4 h and reducing infra cost by **70 %**. The system now supports real‑time content freshness for our recommendation engine.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for the end‑to‑end pipeline and its operational costs.  
- **Dive Deep** – Used DynamoDB Streams + Lambda to surface duplicate URL patterns, iterating on dedup logic until 99.5 % accuracy.  

*Bar‑raiser cues*: depth of AWS service trade‑offs, quantified impact (cost & latency), and lessons from initial monolithic crawler failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
