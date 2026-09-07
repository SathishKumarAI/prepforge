---
qid: ing_cd642283cf__aws__local
question: What are Live Comments? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 893
total_tokens: 1126
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:35-05:00'
sources: []
---

**Question:** *What are live comments and how would you design a scalable live‑comment system?*  

---

## 1️⃣ Quick definition (Customer Obsession)

Live comments are real‑time user–generated messages that appear instantly as a video or stream plays. They’re the “social layer” that keeps viewers engaged, drives community, and feeds analytics.

---

## 2️⃣ Behavioral – STAR

**Situation:** In my last role I led the redesign of a live‑stream platform where 20 % of traffic came from events that had *no* comment functionality. Viewers complained that engagement dropped after 30 s of lag or missing comments.  

**Task:** Deliver a low‑latency, highly available comment service that can handle 1 M concurrent viewers and 10 K writes/second per event while keeping cost < $0.05 per 1000 messages.  

**Action:**  
* Designed an **event‑driven architecture**:  
  * **Producer API** – HTTP/2 + WebSocket endpoints on **API Gateway** → **Lambda@Edge** for auth & throttling.  
  * Messages stored in **Amazon DynamoDB** (partition key = streamID, sort key = timestamp) with GSI for “by‑user”.  
  * Real‑time distribution via **AWS AppSync + WebSocket** and **Amazon SNS topics** per stream.  
  * Back‑pressure handled by **Kinesis Data Streams** feeding a **Lambda consumer** that writes to DynamoDB in batches.  
* Added a **caching layer**: **ElastiCache for Redis** to serve the most recent 500 comments with < 10 ms latency.  
* Implemented **auto‑scaling policies** on Lambda and AppSync, and reserved capacity for Kinesis during peak events.  

**Result:**  
* Latency dropped from 3 s to 150 ms average;  
* 99.9 % of writes persisted within 1 s;  
* Cost reduced by 35 % compared to the monolith;  
* User engagement (comments per minute) increased by **42 %** for live events.

---

## 3️⃣ Technical Design Highlights

| Layer | Service | Why |
|-------|---------|-----|
| API & Auth | API Gateway + Lambda@Edge | Global edge latency, zero‑ops scaling |
| Storage | DynamoDB (partitioned by stream) | Strong consistency, sub‑ms reads |
| Real‑time push | AppSync WebSocket + SNS | Managed pub/sub with fine‑grained auth |
| Back‑pressure | Kinesis Data Streams → Lambda | Decouples write spikes from storage |
| Cache | ElastiCache Redis | Fastest read path for hot comments |
| Monitoring | CloudWatch Alarms + X-Ray | Visibility into latency & failures |

**Scalability:** Partitioning by stream ID ensures even distribution; DynamoDB autoscaling handles 10 K writes/s.  

**Availability:** Multi‑AZ deployment, AppSync’s built‑in failover, and Kinesis shards across AZs guarantee > 99.95 % uptime.  

**Cost Trade‑offs:** Using Lambda@Edge + API Gateway eliminates servers; reserved DynamoDB capacity keeps costs predictable while allowing bursts via on‑demand mode.

---

## 4️⃣ Bar‑Raiser Checklist

| Expectation | How I Demonstrated It |
|-------------|-----------------------|
| **Ownership** | Took end‑to‑end ownership from requirement to deployment, iterating based on real user metrics. |
| **Dive Deep** | Benchmarked latency at each layer, tuned DynamoDB read/write capacity, and profiled Lambda memory usage. |
| **Quantified Impact** | Reported 42 % engagement lift and 35 % cost savings with concrete numbers. |
| **Learning from Failure** | After a 2019 outage we added Kinesis as a buffer; post‑mortem showed the value of decoupling writes. |

---

> *“Customers don’t just want to watch—they want to feel heard.”* – Leveraging AWS services, I built a live‑comment system that turns viewers into active participants while keeping the stack lean and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
