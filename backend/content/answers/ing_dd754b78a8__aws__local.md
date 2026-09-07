---
qid: ing_dd754b78a8__aws__local
question: 'Explain: 3.3 CA: Consistency + Availability — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 515
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:52-05:00'
sources: []
---

**Situation – Problem**  
I was tasked with redesigning the recommendation engine for a global e‑commerce platform that served > 1M concurrent users during peak holiday traffic. The existing monolithic service suffered from *CAP* violations: when we sharded data to improve read latency, writes became inconsistent across nodes, leading to stale recommendations and a 12 % drop in click‑through rate (CTR).

**Task – Goal**  
Restore **Consistency + Availability** while keeping **Partition Tolerance** (AWS region failure). Target: < 50 ms response, 99.9 % availability, ≤ 5 % cost over the legacy system.

**Action – Design & AWS Services**  
1. **Event‑driven microservice** using **Amazon Kinesis Data Streams** for write‑through events → guarantees ordering and durability.  
2. **DynamoDB Global Tables** (two regions) with *strongly consistent reads* to satisfy consistency, while auto‑replication handles partition tolerance.  
3. **AWS Lambda** orchestrates writes: on each event it updates the local table then publishes a *commit* message; if commit fails, retries via DLQ.  
4. **Amazon CloudWatch Alarms + SNS** trigger fallback to a read‑only cache (**ElastiCache Redis**) when DynamoDB latency > 30 ms, preserving availability without sacrificing consistency (cache invalidated on write).  

**Result – Impact**  
- CTR recovered to 97% of baseline within 2 days.  
- Latency dropped from 120 ms to 42 ms; 99.92 % requests served < 50 ms.  
- Operational cost increased by only 3 % (Λ invocations + DynamoDB read/write capacity).  

**Reflection – Learnings & Ownership**  
I realized that *CAP* is a design trade‑off, not a bug. By exposing the trade‑offs to stakeholders and iterating on the consistency model, we achieved a system that balanced **Customer Obsession** (accurate recommendations) with **Ownership** (end‑to‑end reliability). The bar‑raiser will note my deep dive into DynamoDB’s consistency models, quantified impact on CTR, and proactive rollback plan using cache fallback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
