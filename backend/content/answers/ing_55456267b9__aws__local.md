---
qid: ing_55456267b9__aws__local
question: 'Explain: Semantic Memory: The Fact Store — Long Term Memory'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 409
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:58-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a *Semantic Fact Store* for an enterprise knowledge graph that needed to ingest billions of facts and serve real‑time inference queries at scale.

**Action (Design)**  
- **Storage:** Used Amazon DynamoDB Global Tables for low‑latency, multi‑region read/write.  
- **Ingestion Pipeline:** AWS Glue crawlers extracted metadata from disparate data lakes; Lambda functions transformed triples into a canonical JSON schema and batch‑loaded them via the DynamoDB Streams + Kinesis Data Firehose to keep the store fresh.  
- **Query Layer:** Deployed Amazon Neptune as the graph engine for semantic queries (SPARQL/Gremlin). A thin API Gateway layer wrapped the Neptune endpoints, translating REST calls into SPARQL.  
- **Caching & Cost Control:** Integrated Amazon ElastiCache‑Redis to cache hot subgraphs, reducing Neptune reads by 70 %. Auto‑scaling on DynamoDB and Neptune ensured 99.99 % availability while keeping monthly costs below $120K.

**Result (Metric)**  
- Reduced query latency from ~1.2 s to **<200 ms** for 95th percentile queries.  
- Scaled ingestion throughput to **10M facts/hour** with zero downtime, enabling the business to launch a new AI‑powered recommendation engine in 3 weeks.

**Reflection (Bar‑raiser cues)**  
I took *Ownership* by coordinating cross‑functional teams and *Dive Deep* into DynamoDB consistency models. The trade‑off between DynamoDB write capacity and latency was mitigated with adaptive scaling, learning that aggressive caching dramatically cuts costs without sacrificing freshness. This solution exemplifies **Customer Obsession** (fast, reliable insights) and **Deliver Results** (measurable performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
