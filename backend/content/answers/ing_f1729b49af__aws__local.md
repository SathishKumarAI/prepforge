---
qid: ing_f1729b49af__aws__local
question: 'Explain: Sources — Together Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 457
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:23:02-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to build a *Sources‑Together AI* pipeline that ingests heterogeneous data (structured logs, semi‑structured telemetry, unstructured text) from on‑prem and SaaS sources for downstream ML models. The goal was to reduce model drift by ensuring 100 % coverage of all data streams while keeping latency < 5 s.

**Action**  
- **Ownership & Bias for Action:** I scoped the project into three phases—(1) a unified ingestion layer, (2) schema‑agnostic enrichment, (3) real‑time feature store.  
- **Dive Deep & Invent & Simplify:** Leveraged **AWS Glue** for ETL, **Amazon Kinesis Data Streams** for low‑latency capture, and **Amazon Timestream** for time‑series storage. To unify schemas I introduced a *Data Catalog* in Glue that auto‑generates type mappings, reducing manual mapping effort by 70 %.  
- For cost control I used **On‑Demand Kinesis shards** only during peak hours (auto‑scaling via CloudWatch alarms) and archived older data to **S3 Glacier Deep Archive**, saving ~35 % on storage.  

**Result**  
- Ingestion latency dropped from 12 s to 4.2 s, meeting SLA.  
- Data coverage increased from 78 % to 100 %, eliminating blind spots that had caused a prior model’s accuracy to fall by 18 %.  
- Cost per GB processed fell 28 % thanks to the hybrid storage strategy.

**Learning & Bar‑Raiser Insight**  
I documented failure modes (e.g., schema drift in third‑party APIs) and built automated alerts, demonstrating *Customer Obsession* for data quality and *Ownership* over the entire pipeline. The bar‑raiser looked for this end‑to‑end ownership, deep technical trade‑offs, and quantifiable business impact—all of which are reflected above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
