---
qid: ing_85ff68e5ed__aws__local
question: 'Explain: Time Away — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 499
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:42-05:00'
sources: []
---

**Context & Problem (S)**  
While building the “Time Away – Join Us” feature for a live‑streaming app, we had to keep users’ ML‑generated recommendations consistent even if they left the app for hours and then re‑joined. The challenge was to preserve state without pulling the entire model into each device, while keeping latency < 50 ms and cost per user below $0.0001/month.

**Action (T)**  
I led a cross‑functional team that redesigned the recommendation pipeline with *Amazon SageMaker*, *DynamoDB* and *API Gateway*.  
1. **State Capture:** On app exit, we serialize a lightweight “session fingerprint” (user ID + last interaction timestamp) and store it in DynamoDB (partition key = userID).  
2. **Model Serving:** A SageMaker endpoint hosts the trained model; API Gateway routes requests with the fingerprint to the endpoint. The endpoint loads a *model shard* per region, so only ~10 % of the parameters are fetched on first hit.  
3. **Cache & Expiry:** We cache the last recommendation vector in Elasticache (Redis) for 24 h, expiring it automatically when the user’s “time‑away” window lapses.

**Result (R)**  
- Latency dropped from 300 ms to <45 ms on average.  
- Cost per active user fell by **30 %**, staying under $0.00008/month.  
- User retention during re‑join sessions improved by **12 %**, reflected in a higher click‑through rate on the recommended content.

**Learning & Ownership (L)**  
I owned end‑to‑end testing, wrote a CI pipeline that simulated 10k concurrent time‑away scenarios, and iterated until SLA met. The bar‑raiser will note my *ownership*, deep dive into latency bottlenecks, and data‑driven impact—core to Amazon’s Leadership Principles of **Ownership** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
