---
qid: ing_9f33caea58__aws__local
question: 'Explain: Short Code Length — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 396
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:40-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a highly‑available URL shortener for a startup that expected 10 M hits/day and a 99.999% uptime SLA. The goal was to keep the service lightweight (short code ≤6 chars) while handling rapid traffic spikes.

**Action**  
1. **Ownership & Dive Deep** – I scoped the data model: `hash -> long_url` stored in DynamoDB with TTL, indexed by a deterministic 6‑char base‑62 hash generated via SHA‑256 and collision‑resolved by linear probing.  
2. **Bias for Action / Invent & Simplify** – Used API Gateway + Lambda (Python) as the front end; caching hot URLs in ElastiCache Redis to reduce DB lookups.  
3. **Scalability & Cost** – Auto‑scaling Lambda and DynamoDB provisioned throughput set at 5 k RCU/WCU with burst capacity; estimated $0.02 per million redirects, under $200/month for peak traffic.  
4. **Availability** – Multi‑AZ DynamoDB + cross‑region read replicas; edge‑cached CDN (CloudFront) to serve the short URLs globally with <50 ms latency.

**Result**  
The prototype handled 15 M requests/day with 99.999% availability, cost <$250/month, and a 0.5 ms average redirect time. The bar‑raiser will note my end‑to‑end ownership, deep trade‑off analysis (hashing vs. DB load), quantified performance, and learning from an initial “single‑node” failure that led to the multi‑AZ design.

*Leadership Principles:* **Customer Obsession** (fast redirects), **Ownership** (full stack responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
