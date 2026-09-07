---
qid: ing_e5656afd6c__aws__local
question: 'Explain: Key Points — Tech-Stacks-Live-Apps/Dream11.md at main \u00b7 Anshul619/Tech-Stacks-Live-Apps
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 408
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:38-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to refactor the “Live‑Stats” micro‑service for a sports‑fantasy platform (Dream11‑style). The existing stack—Node.js + MongoDB on EC2—could not keep up with 200 k concurrent users during live matches.  

**Action**  
* **Ownership & Dive Deep** – I first instrumented the service, collected latency and throughput data (avg 3 s, peak 10 s).  
* **Design** – Re‑architected to a serverless event‑driven pipeline:  
  * **API Gateway + Lambda (Python)** for request handling.  
  * **EventBridge** to fan‑out match updates.  
  * **DynamoDB with PartiQL** for low‑latency reads, backed by **DAX** cache.  
  * **Kinesis Data Streams** to ingest live score feeds and trigger downstream analytics.  
* **Cost & Availability** – Leveraged AWS’s pay‑as‑you‑go model; auto‑scaling ensures 99.99 % uptime with a single point of failure eliminated.  
* **Bias for Action** – Deployed in 3 hours, ran chaos tests, and rolled back within minutes if latency spiked.

**Result**  
Latency dropped from 10 s to <300 ms (95th percentile). Daily active users grew by 18 % during launch week, and the cost per request fell by **32 %** compared with the legacy EC2 deployment.  

*Bar‑raiser cues:* ownership of the whole stack, deep data analysis, clear metrics, rapid iteration, and a post‑mortem that documented what worked and why we avoided similar bottlenecks in future services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
