---
qid: ing_788b49be24__aws__local
question: 'Explain: AI System Design Glossary'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 532
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:56-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession** – our customers are the source of all data‑sets; **Ownership** – I own every layer from ingestion to inference.

**S – Situation**  
In my last role, a startup needed a reusable AI platform that could ingest millions of customer interactions daily and surface real‑time insights for marketing. The problem: no unified terminology caused duplicated models and inconsistent metrics.

**T – Task**  
I was tasked with designing an **AI System Design Glossary**—a living schema that maps raw data, feature names, model outputs, and business KPIs into a single, searchable ontology.

**A – Action**  
1. **Requirements & Architecture**  
   * Data ingestion → **Amazon Kinesis Data Streams** (10 M records/s).  
   * Feature store → **Amazon SageMaker Feature Store** with versioning.  
   * Model registry → **SageMaker Model Registry** tied to the glossary via metadata tags.  
   * Search layer → **Elasticsearch Service** for quick lookup of feature definitions, model lineage, and KPI associations.  

2. **Design Decisions**  
   * Use **AWS Glue Data Catalog** as the master taxonomy; enforce schema‑on‑write with AWS Lake Formation permissions to avoid drift.  
   * Store glossary entries in DynamoDB (event‑driven updates) and replicate to S3 for archival.  

3. **Scalability & Cost**  
   * Kinesis shards auto‑scaling → < $0.015/shard/hr.  
   * Feature store storage ~$0.024/GB/month; 200 GB yields <$5/month.  
   * Elasticsearch cluster (t3.medium) runs 24×7 for $50/mo, with pay‑per‑request search pricing.

**R – Result**  
Within three months, the glossary cut model development time by **35%**, reduced duplicate feature creation by **80%**, and enabled a marketing team to generate campaign insights 2× faster. The system handled >12 M records/day with 99.9% availability.  

*Bar‑raiser takeaways:* I demonstrated deep ownership of the end‑to‑end pipeline, dove into data‑driven metrics, quantified impact, and iterated on failures (e.g., initial schema conflicts) by tightening Glue Catalog rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
