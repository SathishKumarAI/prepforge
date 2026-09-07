---
qid: ing_294caa2635__aws__local
question: 'Explain: How to prepare — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 427
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:10-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we were asked to build an internal knowledge‑base search—essentially “Glean” for our 50k‑employee org. The goal was to reduce the time employees spent hunting docs by 40 % and cut duplicated work across teams.

**Action (Design & Execution)**  
*Customer Obsession + Ownership* – I started with a user interview loop, capturing pain points: slow relevance, stale metadata, and lack of context.  
1️⃣ **Data ingestion** – used **Amazon Kinesis Data Firehose** to stream all internal docs into an **OpenSearch cluster** (auto‑scaling nodes).  
2️⃣ **Semantic layer** – trained a lightweight BERT model on our custom taxonomy; deployed via **AWS SageMaker Endpoint** behind an API Gateway, caching top 100 embeddings in **ElastiCache Redis** for sub‑10 ms latency.  
3️⃣ **Governance & Security** – integrated with IAM and **Amazon Macie** to ensure only approved documents were searchable.  
4️⃣ **Monitoring** – CloudWatch dashboards tracked query latency (target <150 ms) and usage; alerts triggered if doc freshness fell below 90 %.  

**Result**  
Within three months, adoption jumped from 12 % to 68 %, and the average time to find a document dropped from 9 min to **3.2 min**—a **63 % reduction**. Cost per query stayed under $0.02, keeping the solution within our quarterly budget.

**Reflection**  
The biggest learning was that *data quality* mattered more than model complexity; investing in clean ingestion paid off faster than tweaking embeddings. This experience reinforced my belief in **Dive Deep** and **Bias for Action**, qualities a bar‑raiser looks for in an architect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
