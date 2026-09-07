---
qid: ing_d09e50f9c2__faang__local
question: 'Explain: Interview Follow-Up Questions — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 536
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:45:43-05:00'
sources: []
---

**Clarify**  
You’re asking for *what follow‑up questions an interviewer might ask after a candidate explains how they’d implement real‑time search in an AI system.*  
Assumptions:  
1. The base answer covered indexing, query parsing, latency constraints, and relevance ranking.  
2. The interviewers want to probe depth (engineering trade‑offs) and practical deployment.

**Approach**  
Outline a list of probing themes: scalability, consistency, fault tolerance, data freshness, and evaluation. For each theme craft 1–2 concrete questions that surface candidate expertise.

**Depth**  

| Theme | Follow‑up Question | Why it matters |
|-------|--------------------|----------------|
| **Indexing & Sharding** | “How would you shard the inverted index to keep query latency under 50 ms while still supporting near‑real‑time updates?” | Tests sharding strategy, conflict resolution, and merge policies. |
| **Consistency vs Latency** | “If a new document arrives at 10 pm but your search cluster is in a different time zone, how do you ensure users see it within 2 s without sacrificing consistency?” | Probes eventual consistency models (e.g., Lamport clocks, vector clocks). |
| **Fault Tolerance** | “Describe how you’d recover from a primary node crash during a bulk update.” | Looks for leader election, write-ahead logs, and hot‑standby concepts. |
| **Cold Start & Caching** | “What cache invalidation strategy would you use for query results that depend on rapidly changing embeddings?” | Evaluates caching layers, TTLs, and refresh triggers. |
| **Evaluation & A/B Testing** | “How do you measure relevance drift in a production search engine with millions of queries per day?” | Checks familiarity with metrics (MAP, NDCG) and online evaluation pipelines. |

**Edge Cases**  
- Extremely high write throughput vs read latency trade‑off.  
- Handling non‑English or multimodal data without index corruption.  
- Network partitions affecting query routing.

**Optimize & Communicate**  
After listing questions, explain that a strong answer should tie each to concrete architectural patterns (e.g., Kafka + Spark for ingestion, ElasticSearch sharding, Redis for hot cache). Emphasize trade‑offs: lower latency → more replicas; higher consistency → stricter locking. Conclude by stressing the importance of measurable SLAs and continuous monitoring in production AI search systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
