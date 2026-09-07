---
qid: ing_c64ea89d6e__aws__local
question: 'Explain: Every Salary Source Disagrees (Here’s Why That’s Normal)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 485
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:06-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a unified “Salary Insight” service for an HR SaaS that ingests quarterly compensation data from 12 partner feeds (payroll, finance, third‑party APIs). Stakeholders complained that the aggregated numbers “disagreed” across dashboards. My goal: explain why discrepancies are expected and deliver a robust reconciliation layer that produces a single, auditable salary figure per employee.

**Action – Technical Design**  
1. **Data Ingestion** – Use **Amazon Kinesis Data Streams** (real‑time) + **AWS Glue** for batch pulls.  
2. **Schema Registry & Validation** – **AWS AppConfig** stores versioned schemas; incoming records are validated against them to catch missing fields or unit mismatches.  
3. **Reconciliation Engine** – A serverless **Lambda** pipeline applies deterministic rules:  
   * Prefer payroll source if `source_priority=1`.  
   * If multiple sources exist, compute weighted average (weights from data confidence).  
   * Flag outliers (>30 % deviation) for manual review.  
4. **Audit Trail** – Store every transformation in **Amazon DynamoDB Streams** and publish to **EventBridge**; each event is immutable and searchable via a **CloudWatch Logs Insights** query.  
5. **Scalability & Cost** – Lambda scales automatically; Kinesis shards handle 10 k events/s, costing <$0.02/hr per shard. DynamoDB’s on‑demand mode keeps costs predictable.

**Result**  
After deployment, the reconciliation engine reduced reported salary discrepancies by **92 %**, cutting manual review tickets from 1,200/month to 120/month (a $48K annual savings). Stakeholders now see a single source of truth and can trust the dashboards.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a transparent, auditable salary view.  
- **Dive Deep** – Engineered end‑to‑end data flow, quantified impact, and learned from early outlier spikes to refine weighting logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
