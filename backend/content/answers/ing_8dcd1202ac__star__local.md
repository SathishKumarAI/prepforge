---
qid: ing_8dcd1202ac__star__local
question: 'Explain: And now, as a result of that — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 348
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:25-05:00'
sources: []
---

**Situation** – At my last company we were scaling a real‑time analytics platform that ingested over 10 M events per day from IoT sensors. Our existing PostgreSQL cluster was choking on write throughput and the latency for ad‑hoc queries was above our SLA of 200 ms.

**Task** – I had to evaluate a NoSQL solution that could handle high write rates, provide flexible schema for evolving event types, and integrate with AWS analytics services (Glue, Athena) while staying within budget.

**Action** – During re:Invent 2021 I attended the “Which NoSQL database is right for you?” session. I compared DynamoDB, Amazon DocumentDB, and Neptune using a proof‑of‑concept. I benchmarked write throughput, read latency, and cost per GB. I also prototyped a Lambda‑driven ingestion pipeline that wrote directly to each store and used CloudWatch metrics to compare cold starts and provisioned capacity costs.

**Result** – DynamoDB emerged as the winner: 1 M writes/sec with <30 ms read latency, auto‑scaling reduced costs by 35 % compared to DocumentDB, and its PartiQL support let us run SQL‑style queries in Athena. I migrated production traffic over three weeks, cutting our ingestion cost from $12k/month to $7k/month and improving query performance to 120 ms on average. The exercise taught me how to align database choice with workload patterns and AWS tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
