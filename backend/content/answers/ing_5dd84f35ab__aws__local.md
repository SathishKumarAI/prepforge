---
qid: ing_5dd84f35ab__aws__local
question: 'Explain: Physical data models — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 449
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:03-05:00'
sources: []
---

**Answer – “What is a data architecture?” (Machine‑Learning context)**  

> *Leadership Principles:* **Ownership** + **Dive Deep**

**Situation**  
While building an end‑to‑end recommendation engine for a retail client, I was asked to formalize the underlying data architecture. The business wanted real‑time personalization but had siloed transactional logs, customer profiles, and third‑party click streams.

**Task**  
Define a reusable physical data model that supports both batch training (daily) and streaming inference (≤ 1 s latency), while keeping costs under 10 % of the projected $3M yearly spend.

**Action**  
1. **Schema design** – I created an *entity‑attribute* graph: `Customer`, `Product`, `Interaction`. Each node stored both raw and derived attributes; relationships were materialized via a star schema in Redshift for training, and denormalized JSON documents in DynamoDB for inference.  
2. **Data pipelines** –  
   - *Batch:* AWS Glue ETL → S3 → Redshift (daily refresh).  
   - *Stream:* Kinesis Data Streams → Lambda → DynamoDB Streams → SageMaker Neo edge model.  
3. **Cost & scalability** – Used spot instances for Glue, serverless Lambda for transformation, and on‑demand RDS for short‑lived queries. Estimated annual cost: $260K vs the target $300K.

**Result**  
Within 4 months, the architecture enabled a 30 % lift in click‑through rate (CTR) while reducing inference latency from 1.8 s to < 0.5 s. The model’s training accuracy improved by 12 %, and we avoided over $200K in wasted compute by shifting to serverless components.

**Reflection**  
I learned that *ownership* means anticipating future data growth; *Dive Deep* requires mapping every data flow to an AWS service that balances latency, cost, and durability. This blueprint now serves as a reference for all downstream ML projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
