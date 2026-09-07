---
qid: ing_1a9a01a086__aws__local
question: 'Explain: So think of two points let''s say — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 626
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:25-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a real‑time “nearest‑neighbour” service for a navigation app that would return the top 5 closest POIs to any user query point (latitude/longitude). The system had to support >1 M requests per day, respond in <50 ms, and scale to 10× traffic during peak hours.

**Action**  
*Architecture:*  
- **Data ingestion:** Stream raw GPS points from devices into Kinesis Data Streams → Lambda → transform → write to DynamoDB (partitioned by geohash).  
- **Indexing & caching:** A periodic Spark job on EMR builds a 2‑dimensional KD‑tree stored in S3. An ElastiCache Redis cluster hosts the tree for low‑latency lookups.  
- **Query service:** API Gateway → Lambda (Python) queries Redis; if miss, falls back to S3 via Athena. Results are returned through API Gateway in <50 ms.  
- **ML model:** A small SageMaker endpoint predicts POI relevance scores using a light gradient‑boosted tree trained on historical click data. The score is used to rank the 5 nearest points.

*Scalability & Availability:*  
- DynamoDB auto‑scales with provisioned throughput; Redis cluster in Multi‑AZ for HA.  
- Lambda concurrency limits set to avoid cold starts; API Gateway throttling protects downstream services.  
- Cost: ~$0.8 M/yr (DynamoDB + Lambda + Redis), but we saved ~30% by caching frequent queries.

**Result**  
Achieved 99.7 % query success within 40 ms, reduced average latency from 120 ms to 35 ms, and cut operational cost by 25 % versus a monolithic RDBMS solution.  

---

### Leadership Principles Highlighted
- **Ownership** – I led the end‑to‑end design, coordinated with data, infra, and ML teams, and owned post‑launch monitoring.  
- **Dive Deep** – I dissected latency bottlenecks, tuned Redis eviction policies, and profiled Lambda memory usage to optimize performance.

### What a Bar‑Raiser Looks For
1. **Quantified Impact:** Clear metrics (latency, cost, success rate).  
2. **Depth & Trade‑offs:** Reasoning about DynamoDB vs. RDS, cache evictions, and fallback paths.  
3. **Learning from Failure:** Discussed an early attempt that over‑provisioned Redis leading to wasted spend; we pivoted to a hybrid cache strategy.

This demonstrates end‑to‑end ownership, deep technical insight, measurable results, and continuous learning—exactly what Amazon expects in a high‑impact system design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
