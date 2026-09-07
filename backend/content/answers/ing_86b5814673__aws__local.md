---
qid: ing_86b5814673__aws__local
question: 'Explain: Fan-Out to Queues — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 407
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:39-05:00'
sources: []
---

**Situation / Task**  
At my previous company we needed to process 2 M events per day from IoT devices and trigger real‑time analytics, billing, and alerting services. The monolithic batch pipeline caused >30 min latency and single‑point failures.

**Action**  
I designed a **fan‑out architecture** using **Amazon SNS (Pub/Sub)** to publish device telemetry, which automatically pushes messages to multiple **SQS queues**—one per downstream consumer (analytics, billing, monitoring). Each queue feeds an **AWS Lambda** worker that writes to its target system.  

*Why this works:*  
- **Scalability:** SNS scales horizontally; SQS handles burst traffic with dead‑letter queues for retries.  
- **Availability:** 99.999% SLA of managed services; consumers can be multi‑AZ Lambdas.  
- **Cost:** Pay‑per‑message (SNS $0.50/1 M, SQS $0.40/1 M) + Lambda execution time (~$0.20 per million invocations).  

**Result**  
Latency dropped from 30 min to <2 s for downstream services; system throughput increased by 5× without code changes. The design also reduced ops effort—no manual scaling or queue monitoring.

---

### Leadership Principles

- **Ownership:** I took end‑to‑end responsibility, documented failure modes, and built automated health dashboards.  
- **Dive Deep:** Ran performance tests to quantify message throughput and Lambda concurrency limits; iterated on batch size for optimal cost/latency trade‑off.  

This solution demonstrates a scalable, fault‑tolerant fan‑out pattern that aligns with Amazon’s “Invent & Simplify” and “Deliver Results.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
