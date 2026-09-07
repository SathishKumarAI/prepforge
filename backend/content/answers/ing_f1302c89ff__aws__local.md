---
qid: ing_f1302c89ff__aws__local
question: 'Explain: Production RAG at Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 438
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:36-05:00'
sources: []
---

**Situation & Task**  
At my previous company we launched a customer‑support chatbot that needed to pull up-to‑date policy documents in real time. The bot had to handle 50k concurrent users and return answers within 1 s, while keeping the cost under $0.01 per query.

**Action – Design**  
I architected a *Production RAG* pipeline on AWS:

| Component | Service | Why |
|-----------|---------|-----|
| **Document ingestion & vector indexing** | S3 + Athena + Amazon Kendra (vector store) | Fast, serverless, scales with data size. |
| **Real‑time retrieval** | Amazon Bedrock (LLM) + Kendra Query API | Low‑latency search; built‑in semantic ranking. |
| **Orchestration & caching** | Step Functions + Lambda + ElastiCache Redis | Guarantees 99.9% availability and sub‑100 ms cache hits for hot queries. |
| **Observability** | CloudWatch + X-Ray | Enables “Dive Deep” into latency buckets. |

I added a *fallback* rule: if Kendra confidence <0.7, the LLM is prompted with a generic template to avoid hallucination—an *Invent & Simplify* move that reduced false positives by 35 %.

**Result**  
- Query latency dropped from 1.8 s to **0.85 s** (average).  
- Cost per query fell from $0.015 to **$0.006** (46 % savings).  
- SLA of 99.95% achieved with zero outage in 12 months.

**Learning & Ownership**  
I instituted a weekly “RAG health” review, catching an indexing lag early; after adding a DynamoDB stream trigger, we eliminated the lag entirely—demonstrating true ownership and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
