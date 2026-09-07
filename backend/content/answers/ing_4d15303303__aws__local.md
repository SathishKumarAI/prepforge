---
qid: ing_4d15303303__aws__local
question: 'Explain: Functional Requirements — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 431
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:27-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with building a *Rate‑Limiter API* that would sit in front of our recommendation engine, ensuring no user could overwhelm the ML inference cluster. The system had to enforce per‑user and per‑IP limits while still delivering sub‑10 ms latency for legitimate traffic.

**Action (Design & Tech)**  
- **Requirements**: 1) enforce a sliding window of 5 requests/second per user/IP; 2) provide real‑time metrics; 3) be horizontally scalable; 4) fail‑open with graceful degradation.  
- I chose **Amazon API Gateway + Lambda + DynamoDB (TTL tables)** for the core logic, and **AWS WAF** to pre‑filter obvious abuse.  
- The Lambda function performed a *token bucket* calculation using the user’s last timestamp stored in DynamoDB; if the bucket was empty it returned HTTP 429, otherwise decremented the token count.  
- For high availability I deployed the API Gateway with **regional edge caching** and set up **CloudWatch Alarms** to auto‑scale Lambda concurrency.  
- Cost was kept low by using **DynamoDB on-demand mode** and leveraging **Lambda provisioned concurrency** only during peak hours.

**Result**  
Within two weeks of rollout, we saw a **92 % reduction in out‑of‑band traffic** to the inference cluster, freeing up 1.4× GPU capacity and improving recommendation latency from 18 ms to 12 ms on average. The system handled 10× the peak load without any outages.

> **Leadership Principles**: *Customer Obsession* – protected end‑user experience; *Ownership* – took full responsibility for reliability and cost; *Dive Deep* – engineered a low‑latency, highly available solution; *Bias for Action* – delivered in under a month.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
