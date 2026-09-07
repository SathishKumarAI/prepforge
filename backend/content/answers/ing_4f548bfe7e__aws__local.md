---
qid: ing_4f548bfe7e__aws__local
question: 'Explain: Request Headers — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 497
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:35-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I was tasked to redesign the event‑driven notification pipeline for a SaaS product that sends real‑time webhook callbacks to millions of partners. The legacy system had a 15 % failure rate on high traffic spikes and partners complained about missing or duplicated payloads.

**Action (Dive Deep + Bias for Action)**  
I built a stateless, API‑first architecture using **Amazon API Gateway** to ingest HTTP POST requests containing custom headers (`X‑Event‑Type`, `X‑Priority`). Each request is validated in a **Lambda@Edge** function that extracts the header values and writes a lightweight record to **DynamoDB** (partition key: partner‑id, sort key: timestamp). A **Kinesis Data Streams** shard per priority tier guarantees ordered delivery; downstream **AWS Lambda** functions read from Kinesis, enrich payloads, and push them to partner URLs via **Amazon SNS** HTTP topics.  
To guarantee idempotency I store a hash of the original request in DynamoDB; duplicates are detected before invocation. The system auto‑scales with API Gateway limits (10 k RPS) and Kinesis shards (1 shard ≈ 1 M records/second).  

**Result (Deliver Results + Quantified Impact)**  
After deployment, we saw a **97 % reduction in failed callbacks** during peak load, and the average latency dropped from 2.4 s to 0.6 s. Cost per callback fell by **$0.00004**, saving ~$120k annually for 10 M events/month.

**Bar‑raiser cues**  
- Ownership: I owned the end‑to‑end flow, documented SLAs, and set up CloudWatch alarms.  
- Dive Deep: I profiled Lambda cold starts, tuned DynamoDB provisioned capacity, and benchmarked Kinesis throughput.  
- Learning from failure: A mid‑night outage revealed a missing IAM policy; I added automated drift detection and retrained the team on least‑privilege best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
