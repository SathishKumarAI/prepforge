---
qid: ing_2842053562__aws__local
question: 'Explain: This is one part of the things — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 464
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:41-05:00'
sources: []
---

**Situation (S)** – I was tasked with redesigning an internal “Location‑Based Alert” feature for a large retail chain that had been built on legacy Google Maps APIs. The service needed to support 50 M daily users, deliver real‑time store‑location alerts, and scale to peak traffic during holiday sales without breaking the existing app.  

**Task (T)** – Replace the single‑point‑of‑failure map backend with a highly available, cost‑effective AWS solution that could ingest millions of GPS events per second, perform proximity searches, and push personalized notifications.

**Action (A)**  
1. **Data ingestion**: Use *Amazon Kinesis Data Streams* to buffer raw location packets at 200 kpps, ensuring durability and replayability.  
2. **Processing & enrichment**: Run a *Kinesis Data Analytics* job (SQL‑based) that joins each point with the nearest store polygon stored in an *Amazon DynamoDB* table indexed by GeoHash. The job writes enriched records to *Amazon SQS* for downstream consumption.  
3. **Real‑time alerting**: Deploy a *Lambda* function triggered by SQS, which queries *Amazon Pinpoint* for push notifications and writes results to *Amazon CloudWatch Logs* for audit.  
4. **Scalability & cost**: Kinesis scales automatically; Lambda auto‑scales with concurrency limits (set at 10 k). Estimated monthly spend ≈$2.5K versus the legacy $12K on Google Maps.  

**Result (R)** – The new pipeline handled peak traffic of 1 M events/s, reduced latency from 350 ms to <80 ms, and cut operating costs by **79 %** while improving reliability (99.999 % SLA).  

> *Leadership Principles:* **Ownership** – I drove the end‑to‑end redesign; **Dive Deep** – engineered a data‑flow that exposed bottlenecks; **Bias for Action** – prototyped within two sprints; **Deliver Results** – met performance and cost targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
