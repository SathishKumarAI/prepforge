---
qid: ing_002266ae9c__aws__local
question: 'Explain: Index Maintenance — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 457
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:47-05:00'
sources: []
---

**Situation / Task**  
I was the lead on a fraud‑detection service that processed ~200 M events per day. The back‑end used DynamoDB tables indexed by user ID and event type, but query latency ballooned to 350 ms after we added a new “region” attribute. My goal: bring read performance down to <50 ms while keeping write cost under $10k/month.

**Action**  
* **Ownership & Dive Deep** – I mapped every index hit across all partitions, identified the hot spot (the “region‑user” composite key).  
* **AWS Services** – Created a *Global Secondary Index* (GSI) on `region#user` and enabled *DAX* for in‑memory caching.  
* **Cost & Scalability** – Used DynamoDB’s auto‑scaling with a target utilization of 70 % to avoid over‑provisioning; DAX cluster size was set to 2 nodes, costing ~$1k/month versus the $4k spent on hot partitions.  
* **Bias for Action** – Deployed the new index in a blue/green rollout; added a CloudWatch alarm that triggers an automated rollback if read latency >80 ms.

**Result**  
Read latency dropped from 350 ms to **42 ms** (a 88 % improvement). Write throughput remained stable, and we saved ~$3k/month on capacity. The new index also reduced the number of hot partitions by 95 %, lowering DynamoDB throttling incidents to zero.

**Learnings & Bar‑raiser signals**  
* Took full ownership of a cross‑team performance problem.  
* Dived deep into metrics, discovered the root cause, and engineered a scalable solution with AWS services.  
* Quantified impact (latency, cost) and iterated quickly through blue/green deployment.  

This showcases **Customer Obsession** (improved user experience), **Ownership**, and **Dive Deep**—key traits Amazon looks for in a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
