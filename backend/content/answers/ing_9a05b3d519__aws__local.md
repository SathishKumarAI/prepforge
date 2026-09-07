---
qid: ing_9a05b3d519__aws__local
question: 'Explain: But the idea is this number(10 KMs) — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 504
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:02-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team at my previous company, we were asked to build an internal “Distance‑to‑Destination” API that could answer queries like *“How many kilometers between two points?”* for up to **10 K requests per second** during peak hours. The goal was to replace a legacy GIS solution that suffered from latency spikes and high operational cost.

**Task** – Design a highly available, low‑latency, cost‑efficient system on AWS that scales automatically, provides accurate distances (within 0.1 km), and logs usage for billing.

**Action**  
- **Data ingestion**: Import OpenStreetMap tiles into an S3 bucket; run a nightly Glue job to convert GeoJSON to Parquet and store in an Amazon Athena‑backed catalog.  
- **Compute layer**: Deploy a fleet of **Amazon EC2 Spot Instances (t3.medium)** behind an Application Load Balancer, each running a stateless Python service using the *Geopy* library with a local SQLite cache of road segments.  
- **Caching**: Cache recent distance calculations in **ElastiCache‑Redis** (cluster mode) for 24 h to reduce recomputation.  
- **Observability**: Instrument with CloudWatch metrics (`RequestCount`, `Latency`) and X-Ray traces; set up an SNS alert if latency > 150 ms.  
- **Cost control**: Spot instances + auto‑scaling (min = 2, max = 20) keep monthly compute under $1,200 vs the legacy $5k.

**Result** – In production we achieved <120 ms average latency at 10 K TPS, a 70 % reduction in compute spend, and 99.9 % availability over 12 months.  

---

### Leadership Principles Reflected  
- **Ownership**: Took full responsibility for architecture, ops, and cost.  
- **Dive Deep**: Engineered data pipelines, tuned caching, and quantified trade‑offs.  
- **Deliver Results**: Delivered a robust, scalable service that met performance & budget goals.

*Bar‑raiser check:* The answer shows ownership, deep technical reasoning, measurable impact, and learning from the legacy system’s failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
