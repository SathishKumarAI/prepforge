---
qid: ing_263dd656e0__faang__local
question: 'Explain: Glean Users — Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 443
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:12:47-05:00'
sources: []
---

**Clarify**  
You’re asking me to explain how the *Glean* platform gathers user data for its documentation system. I’ll assume we’re talking about an internal search‑and‑recommend engine that ingests logs, clicks, and query context from employees within a company.

**Approach**  
1. Outline data sources (clickstream, doc edits, feedback).  
2. Show ingestion pipeline (ETL → feature store).  
3. Describe modeling: embeddings + ranking.  
4. Touch on privacy safeguards.

**Depth**  

| Step | Detail |
|------|--------|
| **Data Ingestion** | Real‑time Kafka streams from web clients; batch HDFS for legacy logs. Parsed into JSON, enriched with user ID & role. |
| **Feature Store** | Stores vector embeddings of docs (BERT) and user interaction vectors (frequency, recency). Uses Feast for versioning. |
| **Modeling** | Two‑stage: (a) *candidate generation* via locality‑sensitive hashing on doc embeddings; (b) *ranking* with a LambdaMART model that weighs user context, role relevance, and freshness. |
| **Serving** | A gRPC endpoint returns top‑k docs in <50 ms, backed by Redis for caching hot queries. |
| **Privacy & Compliance** | Differential privacy noise on click counts; data retention policy (30 days). All models are audited quarterly. |

**Edge Cases**  
- New users → cold start handled by role‑based defaults.  
- Outdated docs → flagged by low recency score.  
- Misspellings → fuzzy matching via n‑gram overlap.

**Optimize & Communicate**  
We can reduce latency further by pre‑computing similarity matrices during off‑peak hours and employing a Bloom filter to prune irrelevant candidates early. I’d present this as: “First, we collect; second, we embed; third, we rank; finally, we serve—all while keeping privacy in check.” This narrative keeps the interviewer focused on the flow and trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
