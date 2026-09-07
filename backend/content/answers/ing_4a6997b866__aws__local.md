---
qid: ing_4a6997b866__aws__local
question: 'Explain: It''s not an intelligent service it just — Google Maps System
  Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 468
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:13:38-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my time leading the *Navigation Platform* at Amazon Maps, I was asked whether our routing engine qualifies as an “intelligent” service. **I answered:** it isn’t an AI model; it’s a rule‑based system that ingests real‑time traffic and historical data to compute optimal paths.  

- **Situation** – In 2023 we had to decide if we could market the routing API as a “machine‑learning‑driven” product to attract new developers.  
- **Task** – I needed to evaluate the architecture, prove the claim (or refute it), and recommend next steps.  
- **Action** – I dissected the flow:  
  1. **Data ingestion** via Kinesis Data Streams → Lambda transforms → S3/Redshift for analytics.  
  2. **Routing engine** uses a weighted graph in DynamoDB, with edge weights updated by a scheduled Glue job that aggregates traffic from CloudWatch metrics and third‑party feeds.  
  3. No model training or inference occurs; the algorithm is deterministic (Dijkstra’s). I benchmarked latency: <25 ms per request at 1M RPS on an Auto Scaling EC2 fleet, with 99.9% availability via Route 53 health checks.  
- **Result** – We documented that the service is *rule‑based* rather than ML, saving $4M in projected training costs and allowing us to focus on scaling by adding Spot instances (cost reduction 30%) while maintaining SLA.  

**Leadership Principles:**  
- **Ownership** – I took responsibility for clarifying product positioning and avoided misleading marketing.  
- **Dive Deep** – I dissected the system, quantified latency, cost, and scalability, and presented data to stakeholders.  

The bar‑raiser looked for my ownership of the decision, depth in architectural analysis, and the ability to translate that into concrete business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
