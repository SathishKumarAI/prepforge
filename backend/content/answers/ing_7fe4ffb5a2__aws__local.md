---
qid: ing_7fe4ffb5a2__aws__local
question: What is Concurrency? — Concurrency vs Parallelism - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 410
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:20-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role as a ML Engineer at XYZ Corp., I was asked to explain *concurrency* in the context of building a real‑time recommendation engine.  
**S – Situation:** We had a single inference pipeline that processed 200 k requests per minute, but latency spikes caused SLA violations.  
**T – Task:** Design a system that could handle concurrent inference requests without sacrificing throughput or accuracy.  
**A – Action:** I broke the problem into two parts: *Concurrency* (handling multiple tasks in overlapping time) and *Parallelism* (executing those tasks simultaneously).  

1. **Concurrency model** – I introduced an async event‑driven queue using Amazon SQS + Lambda, allowing each request to be processed independently while keeping state in Redis for caching embeddings.  
2. **Parallelism layer** – For CPU‑bound inference, I leveraged AWS Batch with Spot Instances, scaling out up to 64 GPU workers based on CloudWatch metrics.  

This architecture reduced average latency from **350 ms → 75 ms** and increased throughput by **1.4×**, meeting the 99.9% SLA target while cutting operational cost by **23%** due to spot pricing.  

**Leadership Principles:**  
- *Customer Obsession* – ensured end‑user experience was smooth.  
- *Dive Deep & Ownership* – I dissected bottlenecks, wrote unit tests for each component, and maintained a runbook for auto‑scaling policies.  

**Bar‑raiser signals:** I quantified impact (latency/throughput), demonstrated depth by explaining the trade‑offs between SQS latency vs Lambda concurrency limits, and shared lessons learned from a failed attempt that over‑provisioned GPU workers, leading to cost overruns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
