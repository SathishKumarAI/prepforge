---
qid: ing_4ae1d99b58__aws__local
question: 'Explain: Candidate — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 782
total_tokens: 1015
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:29-05:00'
sources: []
---

**Situation / Task**

In my last role I was asked to design a *Real‑Time Presence Platform* for an IoT SaaS that needs to broadcast device status (online/offline, battery, location) to 200 k concurrent users with sub‑second latency. The goal was to replace our legacy polling system and reduce API costs by 60 %.

**Action**

1. **Requirements & Constraints**  
   * <50 ms end‑to‑end latency for status updates.  
   * 99.9 % availability across three AZs.  
   * Cost‑effective scaling up to 10× traffic spikes during firmware rollouts.

2. **Architecture**  
   * **IoT Devices → AWS IoT Core** (MQTT) – secure, low‑latency ingestion.  
   * **Message Broker → Amazon Kinesis Data Streams** – partitions by device ID; retention 24 h for replay.  
   * **Processing Layer → Lambda + DynamoDB Streams** – transform events and write to a **DynamoDB global table** (partition key: `user_id`, sort key: `timestamp`).  
   * **Real‑time API → Amazon API Gateway + WebSocket APIs** – clients subscribe to their user channel; Lambda pushes updates via API Gateway.  
   * **Caching & Load Balancing** – ElasticCache Redis for hot presence data, behind an Application Load Balancer.  

3. **Scalability / Availability**  
   * Kinesis shards auto‑scaling (1–10 shards) keeps ingestion throughput > 10k events/s.  
   * DynamoDB Global Tables replicate across AZs; read capacity autoscaled to 5,000 RCUs per region.  
   * API Gateway WebSocket has built‑in failover and message buffering.

4. **Cost & Trade‑offs**  
   * Eliminated 100 % of polling traffic → $48k/yr saved.  
   * Lambda + DynamoDB costs ≈$12k/yr; overall cost down 60 %.  
   * Trade‑off: Slightly higher complexity (Kinesis + Lambda) but justified by latency & cost goals.

**Result**

*Latency dropped from 1.2 s to **<45 ms**.*  
*Operational costs fell by **62 %** per year.*  
*System uptime hit **99.98 %** over the first six months.*

---

### Leadership Principles Highlighted

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Delivered sub‑second updates directly to end users, improving UX dramatically. |
| **Ownership / Dive Deep** | Took full ownership of the stack, dissected each component’s performance, and iteratively tuned Kinesis shards & DynamoDB capacity. |
| **Bias for Action** | Rapidly prototyped with IoT Core + Lambda, learned from early latency spikes, and pivoted to WebSocket APIs. |

---

### What a Bar‑Raiser Looks For

* **Ownership** – I drove the entire design, from requirements to cost analysis.  
* **Depth** – Detailed trade‑offs between Kinesis vs. SQS, Lambda concurrency limits, and DynamoDB provisioned vs. on‑demand modes.  
* **Quantified Impact** – 62 % cost reduction, <45 ms latency, 99.98 % uptime.  
* **Learning from Failure** – Early tests hit 200 ms latency; we identified Lambda cold starts as the culprit and introduced provisioned concurrency.

This solution showcases how to blend AWS services for a scalable, customer‑centric real‑time platform while aligning with Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
