---
qid: ing_6cb6ac0b3f__aws__local
question: 'Explain: Metadata Request — Producerapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 364
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:30-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project to migrate an on‑prem Apache Kafka cluster to **AWS MSK**, I was tasked with optimizing the Producer API’s *Metadata Request* flow.  
- **Situation:** The existing producer sent frequent metadata requests, causing 12 % higher network traffic and a 3 s latency spike during peak load.  
- **Task:** Reduce metadata overhead while ensuring up‑to‑date broker information for fault tolerance.  
- **Action:**  
  1. Analyzed the request pattern with Wireshark & MSK CloudWatch metrics (**Dive Deep**).  
  2. Implemented a *metadata cache* in the producer, refreshed only on error or after a configurable TTL (30 s), leveraging the `MetadataCache` class.  
  3. Added a **Producer Interceptor** to log cache hits/misses and exposed metrics via Prometheus.  
  4. Deployed the updated code to an **ECS Fargate** task using AWS SDK v2, enabling automatic scaling based on CPU utilization (target 70 %).  
- **Result:** Network traffic dropped by **15 %**, latency improved from 3 s to 1.8 s under peak load, and the producer maintained 99.9 % availability during broker failures (**Deliver Results**).  

This solution demonstrates ownership of performance bottlenecks, deep technical insight, and measurable impact—qualities a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
