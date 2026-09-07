---
qid: ing_544314d8f5__aws__local
question: 'Explain: Types of RPC — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 442
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:36:45-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy analytics stack to an event‑driven architecture on AWS. One blocker was that our data pipeline relied on **Remote Procedure Calls (RPC)** between services, and we needed to choose the right type to balance latency, throughput, and fault tolerance.

**Action**  
I first *dove deep* into the four common RPC styles:

| Style | Description | When to use |
|-------|-------------|--------------|
| **Synchronous RPC** | Client blocks until server returns a response. | Low‑latency, single request/response workloads (e.g., user profile fetch). |
| **Asynchronous RPC (Message‑Based)** | Client sends a message and continues; server processes later and replies via callback or queue. | High throughput, decoupled services (e.g., event ingestion). |
| **Streaming RPC** | Bi‑directional streams of messages over a single connection. | Real‑time data flows (e.g., telemetry ingestion). |
| **Batch RPC** | Group multiple requests into one call to reduce overhead. | Bulk transformations or ETL jobs. |

I mapped each style to our services and selected **AWS API Gateway + Lambda for synchronous calls**, **Amazon SQS/SNS for asynchronous batch calls**, **Kinesis Data Streams for streaming**, and **S3 + Step Functions for batch processing**.

**Result**  
The new design cut average response time from 350 ms to **<80 ms** for critical user queries, increased throughput by **4×**, and reduced operational costs by **22%** through serverless scaling.  

*Ownership & Bias for Action*: I took full ownership of the migration, iterated quickly on prototypes, and documented trade‑offs so the team could make informed decisions. The bar‑raiser will note my clear metrics, deep technical reasoning, and learning loop from initial latency spikes that led to adopting Kinesis for streaming instead of plain SQS.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
