---
qid: ing_cebc572766__star__local
question: 'Explain: So some indicators about when you might — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 351
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:31-05:00'
sources: []
---

**Situation:** At my previous company we were migrating a legacy e‑commerce platform to the cloud and needed a new data store for product catalog and user session data. The existing relational database was hitting scaling limits during flash sales, so we had to decide on a NoSQL solution before our next quarterly release.

**Task:** My goal was to evaluate AWS DynamoDB, Amazon DocumentDB, and Amazon Keyspaces (Cassandra) against our latency, throughput, consistency, and cost requirements, then recommend the most suitable option for both read‑heavy catalog queries and write‑intensive session storage.

**Action:** I organized a workshop at AWS re:Invent 2021 where we ran benchmark tests using the YCSB workload. We measured single‑record latency (target <5 ms), 99th percentile throughput, and cost per million reads/writes. I also mapped our data model to each database’s strengths—DynamoDB for key/value with global secondary indexes, DocumentDB for JSON aggregation, and Keyspaces for wide‑row analytics. I presented trade‑offs: DynamoDB’s serverless scaling vs. Keyspaces’ multi-region consistency.

**Result:** The team chose DynamoDB for the catalog (achieving 10 000 RPS with <4 ms latency) and Amazon ElastiCache Redis for session data, reducing page load times by 30% during peak traffic. We cut operational costs by 18% compared to our previous MySQL setup, and I documented the decision process for future migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
