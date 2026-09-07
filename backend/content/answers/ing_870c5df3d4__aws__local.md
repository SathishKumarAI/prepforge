---
qid: ing_870c5df3d4__aws__local
question: 'Explain: have the exact data we want exact — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 438
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:29-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to redesign a city‑wide parking‑garage network so that drivers could see *exact* real‑time availability and receive predictive pricing based on demand spikes. The goal was to reduce user wait time by ≥30 % and increase revenue by 15 % within the first year.

**Action (A)**  
1. **Data pipeline** – I built a fault‑tolerant ingestion layer with Kinesis Data Streams feeding into Lambda, which validated sensor data and stored snapshots in DynamoDB.  
2. **ML model** – Using SageMaker, I trained an LSTM to forecast occupancy 30 min ahead per bay, deploying the endpoint behind API Gateway.  
3. **Pricing engine** – A scheduled ECS task adjusted dynamic rates using the predictions, persisting results in Aurora Serverless for instant lookup by the mobile app.  
4. **Observability** – CloudWatch metrics and X-Ray traces surfaced latency issues; I set up alerts that triggered auto‑scaling of Lambda concurrency.

**Result (R)**  
- **Wait time dropped from 6 min to 3.8 min (−36 %)** within three months.  
- **Revenue grew 18 % YoY**, exceeding the target by 3 %.  
- **Cost per prediction stayed below $0.02**, keeping the model profitable.

**Reflection**  
I owned the end‑to‑end system, diving deep into sensor reliability and ML drift. The biggest learning was that real‑time data quality is more critical than complex models; I simplified by caching recent observations locally on edge devices. This aligns with **Customer Obsession** (delivering instant parking info) and **Ownership** (owning the full stack from ingestion to pricing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
