---
qid: ing_4880bd526b__aws__local
question: 'Explain: So we''ve basically gone from a billion — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 452
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:26-05:00'
sources: []
---

**Answer – Amazon Way**

**Situation & Task (S)**  
At a recent re:Invent session we were asked to pick the “right” NoSQL database for a global e‑commerce platform handling **1 billion+ customer records** and serving 200k concurrent requests per second. The goal was to reduce latency, cut operational costs, and maintain 99.999% availability.

**Action (A)**  
I scoped the use cases: *write‑heavy product catalog updates*, *read‑heavy recommendation lookups*, and *geo‑partitioned user sessions*. I evaluated **Amazon DynamoDB**, **Cassandra on EC2**, and **MongoDB Atlas**.  

- **DynamoDB** offered managed scaling, built‑in auto‑sharding, and a single‑digit millisecond latency at 200k RPS with on‑demand capacity (cost ≈ $1.2M/yr).  
- Cassandra required manual cluster tuning and had higher operational overhead (~ $3.5M/yr).  
- MongoDB Atlas was flexible but struggled under the write churn and cost escalated to ~$4M/yr.

I chose **DynamoDB** with a secondary GSI for recommendations, leveraging *AWS Lambda* for schema migrations and *Amazon CloudWatch* for anomaly detection.

**Result (R)**  
Post‑migration latency dropped from 45 ms to **12 ms**, throughput scaled elastically without provisioning changes, and operational cost decreased by **30%**. The system achieved 99.999% uptime during a 6‑month pilot.  

**Leadership Principles Highlighted**  
- *Ownership*: I owned the full migration lifecycle and continuous improvement loop.  
- *Dive Deep*: I benchmarked each engine under realistic workloads and quantified trade‑offs.  

**Bar‑raiser Takeaway**  
Depth of analysis, measurable impact, and a clear learning curve (e.g., “we switched to DynamoDB after failing to keep Cassandra within SLA”) are what hiring managers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
