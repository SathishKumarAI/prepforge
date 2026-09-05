---
qid: ing_a7ea6a01d1__star__local
question: 'Explain: Non-Functional Requirements — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 396
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:51-05:00'
sources: []
---

**Situation:** While interviewing for a senior cloud architect role, I was asked to explain how we’d approach the non‑functional requirements (NFRs) of an Airbnb‑style platform during a system‑design session.

**Task:** My goal was to demonstrate that I could translate business needs—high availability, low latency, strong consistency, and elastic scalability—into concrete design decisions for a global marketplace with millions of hosts and guests.

**Action:**  
I started by outlining the key NFRs:  
- **Availability:** Target 99.999% uptime; implemented multi‑AZ deployments, health‑check auto‑scaling groups, and automated failover using Route 53 weighted routing.  
- **Latency:** Keep page load <200 ms for 95th percentile users; used CDN edge caching (CloudFront), in‑memory data stores (Redis) for session data, and async event queues (Kafka) to decouple search writes from reads.  
- **Consistency & Data Integrity:** Employed ACID transactions in a sharded PostgreSQL cluster for booking flows, while using eventual consistency for listing metadata with DynamoDB global tables.  
- **Scalability & Cost:** Leveraged Kubernetes autoscaling on GKE, serverless functions (Cloud Functions) for sporadic workloads, and spot‑instance pools for background image processing to keep costs under 10% of revenue.

**Result:** The design met the required SLAs while keeping infrastructure spend within budget. I also highlighted that NFRs must be quantified early in the spec so they guide trade‑offs—e.g., choosing eventual consistency for listings allowed us to avoid expensive locking, but we still guaranteed strong consistency where it mattered most (booking confirmation). This approach helped me secure the role and later reduced our deployment failures by 35%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
