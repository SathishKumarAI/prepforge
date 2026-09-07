---
qid: ing_f926b30080__aws__local
question: 'Explain: Distributed Rate limiter implementation for an API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 387
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:42-05:00'
sources: []
---

**Situation (S)** – At my previous company we launched a public REST API that was suddenly hit by a surge of malicious traffic. The rate‑limiter had to throttle requests *across thousands of EC2 instances* without adding latency or cost.

**Task (T)** – Design a distributed, fault‑tolerant rate limiter that guarantees 5 req/sec per user while keeping the system highly available and budget‑friendly.

**Action (A)**  
1. **Ownership & Customer Obsession**: I scoped the problem to real customer impact—70% of failed requests were due to throttling misconfigurations, hurting revenue.  
2. **Dive Deep + Invent & Simplify**: I chose *Amazon DynamoDB* as a single source of truth for per‑user counters (partition key = user ID). Using its conditional writes and TTL feature eliminated manual cleanup.  
3. **Bias for Action**: Implemented an **API Gateway custom authorizer** that reads the counter from DynamoDB, decrements it atomically, and returns HTTP 429 if exceeded.  
4. **Scalability & Cost**: With on‑demand capacity and auto‑scaling, we capped spending at $0.25 per 100K requests—below our budget of $2k/month.  

**Result (R)** – After deployment, throttled request errors dropped from 12% to <1%, while legitimate traffic latency stayed under 15 ms. We saved ~40% on infrastructure costs and earned a *“Customer Obsession”* award for the rapid improvement. The key lesson: a simple DynamoDB‑based counter can replace complex sharded caches when you design with *availability, cost, and clear metrics in mind.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
