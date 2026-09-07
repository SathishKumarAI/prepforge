---
qid: ing_8cb6fc2273__aws__local
question: 'Explain: Partner APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 411
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:12-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led a cross‑functional team to expose our recommendation engine as a public Partner API so external sellers could integrate personalized product suggestions into their storefronts. The goal was to achieve 99.9 % uptime, <50 ms latency for 95 % of calls, and support 10k concurrent partners without breaking the internal service.

**Action (A)**  
1. **Ownership & Customer Obsession:** I scoped the API contract from partner feedback, defined clear rate limits (5 req/s per key), and documented error handling.  
2. **Dive Deep & Design:** Built a stateless Lambda layer that caches model predictions in ElastiCache Redis (clustered, 2‑AZ) to reduce inference latency. The API gateway fronts the Lambda, enforcing throttling via AWS WAF.  
3. **Bias for Action & Deliver Results:** Deployed blue/green stages using CloudFormation; automated rollbacks on any >1 % error spike. Implemented CloudWatch dashboards and an SNS alerting loop that auto‑scales Lambda concurrency based on 5‑minute moving averages.

**Result (R)**  
- Achieved 99.97 % availability in the first month.  
- Latency stayed below 45 ms for 98 % of requests, exceeding the SLA.  
- Supported 12k concurrent partners while keeping cost under $2k/month by using reserved concurrency and spot instances for non‑critical inference batches.

**Learnings (L)**  
I learned that a lightweight caching layer can dramatically cut model load, but it introduces staleness risks—so I added a TTL of 60 s and a fallback to real inference. This experience reinforced the Amazon principle **“Dive Deep”**: continuously monitor, iterate, and quantify every change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
