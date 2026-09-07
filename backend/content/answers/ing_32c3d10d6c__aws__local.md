---
qid: ing_32c3d10d6c__aws__local
question: 'Explain: Sources — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 435
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:02-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an AI‑driven recommendation engine, I was asked to document the *“Sources – Harvey”* requirement: identify where raw data would come from (Harvey = internal business system) and how we’d ingest it into our ML pipeline.

**Action**  
1. **Dive Deep into the source** – mapped every table in the *Harvey* CRM, noting schema, update cadence, and data quality metrics.  
2. **Design ingestion layer** – chose **Amazon Kinesis Data Streams** for real‑time change capture (CDC) and **AWS Glue** for batch extraction of nightly snapshots.  
3. **Schema evolution handling** – implemented a Glue catalog with *versioned schemas*; used **Glue Schema Registry** to enforce compatibility.  
4. **Security & compliance** – applied IAM roles, VPC endpoints, and KMS encryption at rest.  
5. **Scalability & cost** – estimated 10 GB/day ingestion → Kinesis shard sizing (2 shards) and Glue crawler throttling; projected <$200/month vs $600/month with on‑prem ETL.

**Result**  
- Reduced data latency from 24 h to <5 min, enabling near‑real‑time personalization.  
- Cut ingestion costs by **65%** while improving data freshness, directly boosting recommendation click‑through rate by **12%** (from 3.2% to 3.6%).  

**Leadership Principles Highlighted**  
*Customer Obsession* – faster, more accurate recommendations improved user experience.  
*Ownership* – I took full responsibility for the end‑to‑end pipeline and documented it for future teams.  

**Bar‑raiser Takeaway**  
They look for clear ownership, deep technical detail, quantified business impact, and a learning loop (we iterated on schema handling after the first failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
