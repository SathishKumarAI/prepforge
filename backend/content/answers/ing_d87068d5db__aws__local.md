---
qid: ing_d87068d5db__aws__local
question: 'Explain: Portfolio moves — Data Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 501
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:57-05:00'
sources: []
---

**Situation & Task**  
When our e‑commerce platform launched a new “Dynamic Pricing” feature, the Data Engineering team had to ingest real‑time market data, calculate price elasticity, and expose a single source of truth for downstream ML models. The existing batch pipeline (S3 → Glue → Redshift) couldn’t meet the 5 s latency requirement.

**Action & Technical Design**  
I owned the end‑to‑end solution:  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Ingest | Kinesis Data Streams + Lambda | Near‑real‑time, auto‑scales with throughput. |
| Processing | Glue Streaming Jobs (PySpark) → DynamoDB | Glue provides serverless Spark; DynamoDB offers low‑latency reads for the pricing microservice. |
| Analytics | Athena on S3 + QuickSight | Cost‑effective ad‑hoc queries and dashboards for ops. |
| Monitoring | CloudWatch + X-Ray | End‑to‑end observability, alerting when latency > 5 s. |

I introduced a *checkpoint* table in DynamoDB to guarantee at‑least‑once semantics, reducing data loss risk from 0.3% (historical) to <0.01%. I also added an auto‑scaling policy that kept costs under $1,200/month versus the previous $2,800.

**Result**  
- Latency dropped from **12 s** to **<4 s**, meeting SLA.  
- Real‑time price updates increased conversion by **3.5%** (≈$12M additional revenue in Q4).  
- Data engineering team’s cycle time for new pipelines shrank 40%.

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered a feature that directly boosted sales.  
*Ownership*: Took full responsibility from design to production, including cost control.

**Bar‑raiser Takeaway**  
- **Depth**: Showed understanding of serverless streaming vs batch trade‑offs.  
- **Quantified Impact**: Revenue lift and cost savings clearly measured.  
- **Learning from Failure**: Early pilot revealed checkpointing gaps; iterated quickly to eliminate data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
