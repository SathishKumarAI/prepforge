---
qid: ing_f478d1133e__aws__local
question: 'Explain: Choose the right database — Choose the Right Database for Metric
  Collection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 430
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:34-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to ingest 10 M telemetry events per day from IoT devices for real‑time anomaly detection. The challenge was choosing a storage layer that could handle high write throughput, low‑latency queries, and long‑term analytics while staying under the $2 k/month budget.

**Action & Design**  
1. **Requirements analysis** – writes: 10 M events/day → ~120 k/s; reads: ad‑hoc aggregates + near‑real‑time dashboards; durability for 7‑year retention.  
2. **Evaluation** – compared DynamoDB, Aurora PostgreSQL, and Amazon Timestream.  
   * **DynamoDB** offered low write latency but would cost ~$10 k/month at the required throughput.  
   * **Aurora** gave strong consistency but had high IOPS costs for the write pattern.  
   * **Timestream** was purpose‑built for time‑series, auto‑tiered storage (hot → cold), and supports 5 × cheaper archival than DynamoDB.  
3. **Implementation** – deployed Timestream with a single‑region cluster, used AWS SDK to batch writes (10 k events per batch). Added a Lambda layer that pre‑aggregates metrics for dashboards, pushing results into Amazon QuickSight.

**Result**  
- 70 % reduction in storage cost ($2 k/month vs $6.5 k) while maintaining <15 ms write latency.  
- 99.9 % uptime with built‑in replication; automated data lifecycle removed manual archival tasks.  

**Reflection (Bar‑raiser cues)**  
I owned the end‑to‑end solution, dove deep into throughput & cost models, quantified impact, and learned that a domain‑specific service (Timestream) can outperform generic databases when the workload is time‑series heavy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
