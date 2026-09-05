---
qid: ing_8d2609ce45__star__local
question: 'Explain: And then underneath all of this, we''re — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 361
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:59-05:00'
sources: []
---

**Situation** – At the start of Q2 2021 I was leading a data‑engineering sprint for our new recommendation engine. Our team needed to store user interaction logs that were arriving at ~15 k events per second, with millisecond read latency and strong eventual consistency.

**Task** – I had to pick a NoSQL database on AWS that could ingest the write load, support flexible schema for evolving event types, and allow real‑time analytics via Athena or Redshift. The decision also had to consider cost, operational overhead, and ease of integration with our existing Lambda microservices.

**Action** – I evaluated DynamoDB, Amazon DocumentDB (MongoDB API), and Amazon Timestream. After benchmarking write throughput, I ran a pilot in which I used DynamoDB’s on‑demand capacity mode and Global Secondary Indexes for ad‑hoc queries. I also set up Streams to feed data into Kinesis Data Analytics for real‑time aggregation. Using the AWS Well‑Architected Tool, I compared cost per GB and read/write latency; DynamoDB outperformed the others by 30 % on latency and was 25 % cheaper than Timestream for our use case.

**Result** – The switch to DynamoDB reduced query response times from 120 ms to 75 ms, cut storage costs by $3.2k/month, and allowed us to launch the recommendation feature two weeks early. I learned that a quick, small‑scale pilot can surface hidden trade‑offs in latency vs. cost before fully committing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
