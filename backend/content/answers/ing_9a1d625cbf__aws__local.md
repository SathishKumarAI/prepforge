---
qid: ing_9a1d625cbf__aws__local
question: 'Explain: Real-time Processing and Responsiveness — Event-Driven Architecture
  (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 429
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:19-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy batch‑processing pipeline that delivered user insights every night into an *event‑driven* microservice architecture. The goal was to reduce data latency from 24 h to < 5 min while keeping cost under 10 % of the old system.

**Action (Technical)**  
I designed an **EDA stack** using Amazon Kinesis Data Streams for ingest, Lambda for stateless processing, and DynamoDB Global Tables for low‑latency state. Each event carried a *userId* and *action*, triggering a Lambda that updates a “last‑activity” item in DynamoDB.  
- **Scalability**: Kinesis auto‑scales to 10⁶ events/sec; Lambdas run parallel shards.  
- **Availability**: Lambda retries on failure, DynamoDB provides single‑AZ read/write capacity with multi‑region replication (99.999 % SLA).  
- **Cost**: We eliminated the nightly EC2 batch job (≈$1200/month) and paid only for actual invocations (~$180/month).

**Result**  
Latency dropped from 24 h to < 5 min, user engagement metrics (click‑through rate) increased by 12 % within two weeks of launch. The new pipeline also reduced operational overhead by 70 %.

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivering near real‑time insights directly improved user experience.  
- **Ownership & Dive Deep** – I architected, monitored, and iterated on the entire event flow, continuously profiling Lambda cold starts and stream lag.  

> *Bar‑raiser listens for:* clear ownership of the problem, deep dive into AWS services and trade‑offs, quantified impact (latency, cost, engagement), and lessons learned from pilot failures (e.g., tuning shard count).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
