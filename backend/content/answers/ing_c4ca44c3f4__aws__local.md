---
qid: ing_c4ca44c3f4__aws__local
question: 'Explain: Publish/Subscribe — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 470
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:00-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign our recommendation engine’s data pipeline so that new user‑behavior events could be processed in real time while keeping the system cost‑effective and highly available.

**Action (Design)**  
* **Publish/Subscribe pattern** – Each microservice publishes raw click events to an SNS topic (`UserEventsTopic`).  
* **Message Queues** – Two SQS queues (`RealtimeQueue`, `BatchQueue`) are subscribed.  
  * `RealtimeQueue` (FIFO, max‑messages = 10k) feeds the real‑time inference Lambda; it guarantees order for a single user session and keeps latency < 200 ms.  
  * `BatchQueue` (Standard, long‑polling) aggregates events for nightly training jobs on EMR.  

AWS services used: SNS, SQS FIFO/Standard, Lambda, EMR, DynamoDB (state), CloudWatch for metrics.  
* **Scalability** – Auto‑scaling Lambda concurrency and SQS visibility timeout tuning keep the system elastic up to 10× traffic spikes.  
* **Availability** – Multi‑AZ deployment of SNS/SQS; DLQ routing ensures no data loss.  
* **Cost** – Use “pay‑as‑you‑go” pricing for SQS, minimize Lambda invocations by batching messages (max 10 msgs per batch).  

**Result**  
After rollout:  
* Real‑time recommendation latency dropped from 1.2 s to 0.18 s (≈ 85% reduction).  
* Throughput increased to 500k events/sec without provisioning extra instances.  
* Operational cost fell by 30 % due to the serverless design.

**Reflection (Bar‑raiser notes)**  
I owned the end‑to‑end flow, dove deep into SQS visibility and Lambda batch sizing, quantified impact with clear metrics, and iterated on failure modes (e.g., DLQ replay logic). This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
