---
qid: ing_911ba8021b__aws__local
question: 'Explain: ColBERTv2 and PLAID Indexing — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 445
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:10-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign a semantic search engine for an enterprise knowledge base that served 200 k daily queries and had a 2 % error rate in top‑1 retrieval. The goal was to improve relevance while keeping latency under 150 ms.

**Action**  
I introduced **ColBERTv2** (late‑interaction dense retrieval) coupled with the **PLAID index** for multi‑indexing across topic shards.  
- *Requirements*: sub‑millisecond query time, 99.9% availability, <10 % cost growth.  
- *Design*:  
  - Encode documents once into 128‑dim vectors with ColBERTv2 on an **EC2 g4dn.xlarge** GPU cluster (GPU‑accelerated inference).  
  - Store vectors in a **DynamoDB Global Secondary Index** keyed by topic, backed by **S3** for raw text.  
  - Query side uses **AWS Lambda@Edge** to perform late interaction scoring (dot‑product) against the PLAID shard indices stored in **ElastiCache Redis** for low‑latency lookup.  
  - Autoscaling via **Application Auto Scaling** on Lambda and DynamoDB auto‑scaling; use **Cost Explorer** to monitor spend.  

**Result**  
Latency dropped from 280 ms to 120 ms (43% improvement), relevance increased by 18 pp (MRR 0.52 → 0.70). Cost rose only 7 %, staying within budget. I documented the failure of a monolithic BM25 baseline, learned that late interaction lets us trade compute for accuracy, and shared the architecture in a live demo to senior leadership.

**Leadership Principles**  
- **Customer Obsession**: delivered a faster, more accurate search directly benefiting users.  
- **Dive Deep & Ownership**: I dissected query patterns, engineered the indexing pipeline, and iterated until metrics met goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
