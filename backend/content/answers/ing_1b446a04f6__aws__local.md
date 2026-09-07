---
qid: ing_1b446a04f6__aws__local
question: 'Explain: Cached Reads — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 492
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:27:59-05:00'
sources: []
---

**S – Situation:**  
At my previous role, we needed to deliver real‑time pricing for a ride‑hailing app that read over **40 M requests/sec** from a distributed SQL store (Aurora). The latency target was < 50 ms, but the database alone couldn’t sustain it.

**T – Task:**  
Design an integrated cache layer that could absorb peak traffic while guaranteeing eventual consistency and cost control.

**A – Action:**  
I architected a **tiered caching stack** using:
1. **Amazon ElastiCache‑Redis (cluster mode)** for hot key eviction (LRU) and cross‑AZ replication, providing sub‑millisecond reads.
2. **AWS Global Accelerator + Route 53 latency routing** to push traffic to the nearest cache node, reducing egress costs by 30 %.
3. A **write‑through pattern**: application writes go to Aurora first, then publish a “price‑updated” event on Amazon SNS; Lambda functions invalidate or update Redis keys.
4. Implemented a **fallback path** using Amazon DynamoDB Global Tables for eventual consistency when Redis misses.

I also added **CloudWatch metrics and Alarms** (e.g., cache hit ratio > 95 %) to trigger auto‑scaling of Redis shards during flash sales.

**R – Result:**  
- Cache hit rate rose from 12 % to **97 %**, cutting read latency from 120 ms to **<30 ms**.  
- Aurora write load dropped by **70 %**, saving ~$200k/month on instance capacity.  
- The system handled a 3× traffic spike during a city‑wide event without any outages.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Delivered sub‑50 ms latency, improving user experience.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility for the cache design, dissecting every metric and trade‑off.  

**Bar‑raiser takeaways:** I demonstrated ownership by owning failure modes (e.g., Redis node loss), depth through detailed service selection, quantified impact via real cost/latency numbers, and learning from a prior failed monolithic cache that caused 2 % downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
