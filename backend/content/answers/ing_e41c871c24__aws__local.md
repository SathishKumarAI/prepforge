---
qid: ing_e41c871c24__aws__local
question: 'Explain: After-Sales Support — What is TPS, what is QPS, and what is the
  difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 393
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:36-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my last role building a recommendation engine for an e‑commerce platform, I was asked to explain TPS and QPS while designing the after‑sales support API that served millions of user queries per day.

- **TPS (Transactions Per Second)** counts *complete business transactions*—each transaction must pass all validation, persistence, and business logic layers before it’s considered successful.  
- **QPS (Queries Per Second)** measures *individual read requests*, often stateless calls to fetch data or run inference models.  

**Difference:** TPS is a stricter metric because it requires end‑to‑end success; QPS can include partial failures or cached responses, so it usually shows higher numbers.

**STAR Example**

- **Situation:** The support API was throttling during peak holidays (QPS > 12 k/s) and many tickets were delayed.  
- **Task:** Reduce latency while keeping transactional integrity for ticket creation.  
- **Action:** Implemented a *CQRS* pattern: write side used Amazon DynamoDB with conditional writes (ensuring TPS ≤ 1 k/s), read side used Aurora Serverless for QPS scaling to 15 k/s. Added a cache layer (ElastiCache Redis) to serve repeated query patterns, reducing QPS on the database by ~70%.  
- **Result:** Latency dropped from 2.4 s to 0.8 s; TPS‑related SLA improved by 95%; cost decreased by $3k/month.

**Key Takeaway:** Understanding TPS vs. QPS lets you architect systems that balance consistency and throughput—critical for customer‑obsessed, high‑scale ML‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
