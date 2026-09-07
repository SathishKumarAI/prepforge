---
qid: ing_a99fe7326a__aws__local
question: 'Explain: From Fragmentation to Centralization — Scaling Our Logging System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 497
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:49-05:00'
sources: []
---

**Situation / Task**  
At my previous role we had ~30 micro‑services each writing logs to a local file system and a handful of third‑party collectors. The result was *fragmented* data with 95 % of incidents buried in noisy logs, SLA violations rising from **2 % → 12 %**, and engineers spending ~4 hrs per incident hunting for the root cause.

**Action**  
I owned the migration to a *centralized*, serverless pipeline:

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest | **Amazon Kinesis Data Streams** + **Lambda** | Near‑real‑time, auto‑scales with traffic (up to 10 M records/second). |
| Store | **S3 Glacier Deep Archive** for long‑term, **S3 Standard** for hot data | Cost‑effective tiering; compliance with retention policy. |
| Query | **Amazon Athena** + **Glue Catalog** | SQL‑based ad‑hoc analysis, no provisioning. |
| Alerting | **CloudWatch Alarms** on metric patterns | Immediate visibility into latency spikes or error rates. |

I introduced a *schema registry* (AWS Glue) to enforce log consistency and built a **Grafana** dashboard for real‑time monitoring. The migration took 6 weeks with zero downtime, leveraging blue/green deployment.

**Result**  
- Reduced incident investigation time from **4 hrs → 30 min** (80 % savings).  
- Cut operational cost of log storage by **70 %** (from $12k/month to $3.5k/month).  
- Improved MTTR for critical services from **2.8 days → 0.9 day**.

**Reflection**  
I *dive deep* into each service’s cost model, trading off latency vs. price; I *own* the end‑to‑end pipeline and iterated on schema enforcement to avoid future fragmentation. The bar‑raiser will note my focus on measurable impact, ownership of cross‑team change, and learning from early failures (e.g., adjusting shard count after a spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
