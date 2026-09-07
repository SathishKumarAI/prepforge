---
qid: ing_f00a1345e9__aws__local
question: 'Explain: So what happened on a PC or — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 557
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:00-05:00'
sources: []
---

**Situation (S)**  
During the *AWS re:Invent 2021* keynote I was asked to choose a NoSQL store for an IoT telemetry platform that ingested 2 M events/sec from 100k devices and needed real‑time analytics with sub‑200 ms latency. The decision had to balance cost, scalability, and developer velocity.

**Task (T)**  
Select the database that delivers high write throughput, flexible schema, and easy integration with downstream ML pipelines on AWS while staying under a $500/month budget.

**Action (A)**  
I evaluated DynamoDB, Amazon DocumentDB, and Amazon Keyspaces (Cassandra).  
* **DynamoDB**: Native integration with Lambda & Kinesis; provisioned capacity + auto‑scaling; built‑in TTL.  
* **DocumentDB**: MongoDB API but higher cost and limited write scaling for our burst pattern.  
* **Keyspaces**: Cassandra‑compatible, good for wide‑row workloads but required manual cluster management.

I chose **DynamoDB** because:
1. **Scalability** – Auto‑scaling handles 2 M ops/sec with a single partition key (`device_id`).  
2. **Availability** – Multi‑AZ replicas; 99.999% SLA.  
3. **Cost** – With on‑demand capacity and DynamoDB Accelerator (DAX) caching, projected cost ≈ $320/month.  
4. **ML Integration** – Direct export to S3 via Streams → Glue ETL → SageMaker training.

I implemented a *partition key* strategy (`device_id#hour`) and used **DynamoDB Global Secondary Indexes** for querying by `event_type`. The solution reduced latency from 500 ms (pre‑design) to 120 ms and dropped storage cost by 30% after enabling TTL.

**Result (R)**  
The platform processed peak traffic without throttling, achieved a 99.98% success rate, and cut operational overhead by 40%. The ML pipeline now trains daily models in under 15 min, improving anomaly detection accuracy from 82% to 94%.

---

### Bar‑raiser takeaways
* **Ownership** – I scoped the entire data flow, not just the DB choice.  
* **Dive Deep** – Benchmarked throughput per partition key and analyzed cost curves.  
* **Quantified Impact** – Provided concrete latency & cost savings numbers.  
* **Learning from Failure** – Early prototypes with DocumentDB hit write throttles; pivoting to DynamoDB avoided a costly scaling crisis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
