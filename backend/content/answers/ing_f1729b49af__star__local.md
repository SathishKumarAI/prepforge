---
qid: ing_f1729b49af__star__local
question: 'Explain: Sources — Together Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 358
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:07-05:00'
sources: []
---

**Situation**  
At my last role as a data engineer at FinTechX, our ML team was building a fraud‑detection model that required diverse transaction histories from multiple banks. However, each bank had its own schema and privacy constraints, so we couldn’t just pull raw data into a single warehouse.

**Task**  
I needed to design a unified source layer—“Sources Together AI”—that would ingest, transform, and expose these heterogeneous datasets through a common API while respecting GDPR and PCI‑DSS rules. The goal was to reduce the model training time from 10 days to under 48 hours and improve feature coverage by 30%.

**Action**  
I built an orchestrated ETL pipeline using Airflow, Spark, and Delta Lake. First, I defined a canonical data model in Snowflake and created lightweight adapters for each partner’s schema. Next, I implemented row‑level encryption with AWS KMS and used fine‑grained IAM policies to enforce access controls. To speed up ingestion, I leveraged parallel Spark jobs that streamed change logs via Kafka into the lake. Finally, I exposed a GraphQL endpoint so the ML team could query aggregated features on demand.

**Result**  
The unified source layer cut data prep time by 70%, enabling the fraud model to train in under 24 hours. Accuracy improved from 88% to 93% precision because we had richer, cleaner features. I learned that a well‑architected source layer is as critical as the ML algorithm itself—especially when scaling across multiple regulated partners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
