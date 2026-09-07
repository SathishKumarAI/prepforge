---
qid: ing_a7bf98124e__aws__local
question: 'Explain: location that is the latest location of — UBER System design |
  OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 429
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:53-05:00'
sources: []
---

**Situation & Task (Owner, Customer‑Obsessed)**  
When I joined the ML ops team at a rideshare startup, our customers complained that ETA predictions drifted after peak traffic spikes—customers were stuck waiting 15 % longer than promised. My goal was to deliver a real‑time “latest location” service that feeds downstream routing engines with accurate driver positions, reducing wait times by ≥10%.

**Action (Dive Deep & Bias for Action)**  
1. **Data pipeline** – Ingest GPS packets (≈20 kHz) into Kinesis Data Streams; transform with Lambda to normalize timestamps and drop duplicates.  
2. **Storage** – Persist latest coordinates in DynamoDB Global Tables, partitioned by city, ensuring <5 ms read latency across AZs.  
3. **ML inference** – Deploy a SageMaker endpoint (real‑time) that corrects GPS jitter using Kalman filters; batch model updates nightly via Glue ETL.  
4. **Caching & CDN** – Route queries through CloudFront + ElastiCache Redis to keep sub‑10 ms round‑trip for mobile clients.  

I added a health‑check microservice on ECS Fargate that pushes metrics (latency, error rate) to CloudWatch and triggers auto‑scaling.

**Result (Deliver Results)**  
Within 4 weeks:  
- **Latency** dropped from 120 ms → 8 ms average.  
- **Customer wait time** decreased by 12% during peak hours.  
- **Cost** stayed under $1.2K/month, a 30% reduction versus the legacy on‑prem stack.

**Learning (Bar‑raiser focus)**  
I documented failure modes—GPS outages—and built automated fallback to last known location with confidence scores. The design now scales to 10M concurrent users and is fully compliant with GDPR data residency rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
