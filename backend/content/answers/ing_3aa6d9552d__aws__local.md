---
qid: ing_3aa6d9552d__aws__local
question: 'Explain: Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 707
total_tokens: 934
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:08-05:00'
sources: []
---

**Scenario (S)**  
When I led the migration of our e‑commerce platform to a serverless architecture in 2023, we needed a robust webhook system that could deliver real‑time order status updates to third‑party vendors while keeping latency below **50 ms** and cost per event under **$0.0001**.

**Task (T)**  
Design a scalable, highly available webhook dispatcher that handles ~10 k events/sec with eventual consistency across regions.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| 1 | **API Gateway + Lambda** | Exposes `/webhook` endpoint; auto‑scales to traffic spikes. |
| 2 | **SQS FIFO** | Guarantees order of events, decouples ingestion from processing, and buffers bursts up to 100×. |
| 3 | **SNS (topic per vendor)** | Pushes messages to Lambda subscribers; enables fan‑out without extra code. |
| 4 | **Lambda @ edge + CloudFront** | Adds custom headers/URL signing for secure delivery; caches responses to reduce payload size. |
| 5 | **DynamoDB Global Table** | Stores webhook logs with TTL; global replication ensures low‑latency reads in any region. |
| 6 | **Step Functions** (optional) | Orchestrates retries and dead‑letter handling, ensuring at‑least‑once delivery. |

*Scalability*: SQS + Lambda auto‑scales to >10 k events/sec; DynamoDB handles millions of rows with sub‑ms latency.  
*Availability*: Multi‑AZ deployment of all services; SNS provides built‑in retry logic.  
*Cost*: Roughly **$0.0001** per event (Lambda 100 ms + SQS message), ~10× cheaper than EC2 polling.

**Result (R)**  

- Reduced average webhook latency from **350 ms** to **45 ms** (70% improvement).  
- Cut operational cost by **35 %** compared to the legacy monolith.  
- Achieved 99.999% uptime in a single year, with zero data loss during a sudden traffic surge.

---

### Leadership Principles Highlighted  

* **Ownership** – I took full responsibility for end‑to‑end reliability and cost control.  
* **Dive Deep** – Conducted latency profiling on each Lambda layer; tuned memory to 512 MB for optimal performance.  
* **Bias for Action** – Deployed the serverless stack within two weeks of requirement sign‑off, eliminating a 6‑month monolith upgrade cycle.

---

### Bar‑raiser’s Lens  

| What they listen for | Why it matters |
|----------------------|----------------|
| Quantified impact (latency & cost) | Demonstrates business value. |
| Depth (service choice, retry logic) | Shows technical mastery. |
| Learning from failure | I logged a rare 502 from an external API; added exponential back‑off and notified the vendor to improve their endpoint health. |

This design balances speed, reliability, and economics—exactly what Amazon expects when building production‑grade systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
