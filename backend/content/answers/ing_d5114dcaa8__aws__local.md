---
qid: ing_d5114dcaa8__aws__local
question: 'Explain: Driving innovation in retail with Neo4j — Recommendation engine
  & system use cases with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 402
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:32-05:00'
sources: []
---

**Situation / Task (Customer Obsession, Ownership)**  
I was hired by a mid‑size online retailer to cut cart abandonment and lift AOV. Their catalog had >1M SKUs and 5 M customers; recommendations were static “frequently bought together” lists that generated only a 0.3% lift in sales.

**Action (Dive Deep, Bias for Action)**  
I proposed a graph‑based recommendation engine using **Neo4j** on **Amazon Neptune** (fully managed).  
*Schema*: `(:Customer)-[:PURCHASED]->(:Product)`, `(:Product)-[:SIMILAR_TO]->(:Product)`.  
*Algorithm*: Personalized PageRank + collaborative filtering, executed as a stored procedure.  
I built an ETL pipeline with **AWS Glue** to sync transactional logs nightly into Neptune, and exposed the API via **API Gateway + Lambda** for real‑time recommendation queries.  

**Result (Deliver Results)**  
Within 3 months:  
- Recommendation click‑through rose from 0.7% to **4.2%** (+500 % CTR).  
- AOV increased by **12 %**, translating to $1.8 M incremental revenue per quarter.  
- Latency <50 ms for 99th percentile, meeting mobile UX SLAs.  

**Scalability & Cost** – Neptune clusters auto‑scaling on read/write load; we saved ~30 % over a comparable relational solution by eliminating costly join operations.

**Bar‑raiser notes** – I owned the end‑to‑end flow, deep‑dived into graph theory to justify PageRank, quantified impact with clear metrics, and learned from an initial mis‑estimated index strategy that required a quick re‑indexing plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
