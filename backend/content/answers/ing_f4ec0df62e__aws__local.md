---
qid: ing_f4ec0df62e__aws__local
question: 'Explain: 5.2 Follow a User — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 381
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:48-05:00'
sources: []
---

**Situation / Task (S)**  
At my previous company we built a photo‑sharing app that grew from 5 M to 50 M DAU. The “Follow” feature was the core of social discovery, but our naïve implementation caused a 30 % increase in latency and a 15 % spike in cost during peak hours.

**Action (A)**  
1. **Owned the problem** – I led a squad to re‑architect follow‑streaming using *Amazon DynamoDB* for user‑follow graph (fast reads, auto‑scaling) and *SQS + Lambda* for asynchronous fan‑out of new posts.  
2. **Dived deep into data** – Measured query latency (95 % ≤ 50 ms) and throughput; tuned read capacity units to 10× the peak traffic.  
3. **Bias for action & Invent & Simplify** – Replaced a single monolith with a *micro‑service* pattern, added *Amazon CloudFront* caching of follow lists, and used *AWS AppConfig* to roll out feature flags gradually.

**Result (R)**  
- Follow‑stream latency dropped from 350 ms to **<50 ms** at peak.  
- Cost per follower notification fell by **42 %** ($0.02 → $0.012).  
- User engagement (time on app) rose 18 % in the first month after deployment.

**Learnings**  
The bar‑raiser will hear: I took full ownership, quantified impact with real metrics, and iterated quickly while learning from early failures (initial fan‑out burst caused a spike).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
