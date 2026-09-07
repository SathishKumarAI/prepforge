---
qid: ing_5d35d38491__aws__local
question: 'Explain: Default to Low Concurrency; LLM Provider 429 Rate Limit Errors'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 561
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:36-05:00'
sources: []
---

**Scenario – “Default to Low Concurrency” & “LLM Provider 429 Rate‑Limit Errors”**

**Situation (S)**  
I was leading a serverless inference pipeline for an e‑commerce recommendation engine that consumed a third‑party LLM API. During peak traffic, the LLM returned *429 Too Many Requests* and our Lambda functions timed out, causing a 15 % drop in conversion rate.

**Task (T)**  
Design a resilient system that respects provider limits while maintaining low latency for users.

**Action (A)**  
1. **Dive Deep** – I profiled the API’s burst behavior (5 requests/second per key) and measured our average request rate (≈30 req/s).  
2. **Ownership + Invent & Simplify** – Implemented a *Token‑Bucket* throttler in an Amazon API Gateway custom authorizer, backed by DynamoDB TTL for token counts.  
3. Added **“Default to Low Concurrency”**: Lambda reserved concurrency set to 5, with an adaptive auto‑scaling policy that only increases after a burst window clears.  
4. Employed **Amazon Step Functions** to queue excess requests in SQS, retrying with exponential back‑off (max 3 attempts).  
5. Deployed **CloudWatch Alarms** on *429* metrics; when exceeded, the system automatically throttles upstream traffic.

**Result (R)**  
- Reduced 429 incidents by **92 %**, restoring throughput to 98 % of peak capacity.  
- Latency dropped from 2.4 s to 1.1 s (average), improving conversion rate by **3.8 pts**.  
- Cost impact was negligible (< $10/month) due to efficient use of reserved concurrency and SQS retention.

---

### What a bar‑raiser listens for
| Indicator | Why it matters |
|-----------|----------------|
| **Ownership** – I owned the full incident lifecycle, from diagnosis to production rollout. | Shows end‑to‑end accountability. |
| **Dive Deep** – Detailed profiling of API limits and traffic patterns. | Demonstrates technical depth. |
| **Quantified Impact** – 92 % error reduction, 3.8 pt lift in conversion. | Concrete business value. |
| **Learning from Failure** – Built a monitoring loop that auto‑adjusts concurrency; future incidents will trigger alerts before user impact. | Continuous improvement mindset. |

This solution aligns with Amazon’s *Customer Obsession*, *Ownership*, and *Dive Deep* principles, delivering reliable ML inference at scale while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
