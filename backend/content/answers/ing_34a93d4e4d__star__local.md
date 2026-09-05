---
qid: ing_34a93d4e4d__star__local
question: 'Explain: Key Features of Aurora Serverless — What is Serverless DB?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 396
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:43-05:00'
sources: []
---

**Situation** – In late‑2023 I was leading a fintech startup’s migration from a monolithic PostgreSQL cluster to AWS for a new mobile payment service that needed instant scaling during flash sales and low cost during off‑peak hours.  

**Task** – I had to design a database solution that could automatically adjust compute capacity, reduce idle costs, and maintain sub‑200 ms latency for 10,000 concurrent users without manual intervention.  

**Action** – I chose Amazon Aurora Serverless v2 because it offers:  
1) **Auto‑scaling clusters**—Aurora dynamically provisions MySQL‑compatible instances in milliseconds based on CPU utilization or custom CloudWatch metrics.  
2) **Pause/Resume**—The cluster pauses after 10 minutes of inactivity, saving $0.000001 per second, then resumes instantly for the next request.  
3) **Serverless Aurora Global Database**—I replicated data across two regions with <1 second failover, ensuring high availability for a global user base.  
4) **Fine‑grained billing**—Billing is per ACU (Aurora Capacity Unit) per second, so I could monitor and cap spend via CloudWatch alarms. I also refactored the application to use connection pooling through RDS Proxy to avoid cold‑start latency spikes.  

**Result** – After migration, average query latency dropped from 350 ms to 180 ms, peak cost during a 2‑hour flash sale fell by 35%, and idle periods saved roughly $1,200 per month. I learned that serverless databases aren’t just “pay for what you use”; they require careful metric tuning and application design to unlock their full value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
