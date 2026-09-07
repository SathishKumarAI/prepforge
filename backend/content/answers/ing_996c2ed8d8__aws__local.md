---
qid: ing_996c2ed8d8__aws__local
question: 'Explain: LFU (Least Frequently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 406
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:21-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a data‑science platform that served real‑time model predictions for > 10 M users. Our in‑memory cache hit ratio fell to **58 %**, driving latency spikes and SLA violations. The problem was the eviction policy—our default LRU couldn’t keep high‑frequency, low‑size keys alive.

**Action (Design & Execution)**  
I scoped a “Top‑8 LFU” strategy:  
1. Maintain a frequency counter per key in DynamoDB (partitioned by namespace).  
2. Use an **Amazon ElastiCache Redis** cluster with the `LFU` eviction policy, backed by a secondary **S3** tier for cold data.  
3. Periodically (every 10 s) run a Lambda to trim keys whose frequency < threshold and push them to S3.  

This required integrating **CloudWatch Metrics** to monitor hit‑ratio, latency, and cost per request. I modeled the cache size as *C = α × distinct_keys* and tuned `α` to keep total memory usage under 4 GB while keeping 95 % of hot keys resident.

**Result**  
Within two weeks:  
- Cache hit ratio ↑ **84 %** (from 58 %).  
- Average latency ↓ **32 ms**.  
- Cost per request fell by **18 %** due to reduced cold‑cache fetches.  

The solution was fully automated, self‑healing, and compliant with our **Ownership** and **Customer Obsession** principles.

> *Bar‑raiser cues*: clear ownership of the problem, deep dive into frequency analytics, quantified impact on latency & cost, and a learn‑from‑failure loop (iterating threshold based on observed traffic patterns).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
