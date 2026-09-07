---
qid: ing_8df41648a6__faang__local
question: 'Explain: Access and consumption — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 358
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:14:14-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of *data architecture* in the context of machine‑learning pipelines—specifically how data is accessed and consumed by ML models.

**Approach**  
1. Define data architecture as the blueprint that governs where data lives, how it moves, and who can use it.  
2. Break it into three layers: *infrastructure*, *data flow*, and *access controls*.  
3. Illustrate with an example pipeline (ingest → store → transform → serve).  

**Depth**  
- **Infrastructure layer**: data lakes/warehouses (S3, Redshift), streaming platforms (Kafka), compute (Spark, Flink).  
- **Data flow layer**: ETL/ELT pipelines, schema evolution, lineage tracking.  
- **Access control layer**: IAM policies, row‑level security, API gateways.  
- In ML, this translates to training data readiness (clean, labeled, versioned) and serving layers that expose feature stores or model endpoints with latency guarantees.

**Edge cases**  
- Mixed‑schema sources → need schema registry.  
- Real‑time vs batch demands → hybrid architectures.  
- Regulatory constraints (GDPR) require data residency controls.  

**Optimize & Communicate**  
Explain trade‑offs: central lakes reduce duplication but can hurt performance; multiple stores increase consistency overhead. Emphasize modularity—use a feature store to decouple data engineering from model developers, enabling faster iteration and reproducible results. Conclude by highlighting how a well‑designed data architecture scales ML workloads while ensuring governance and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
