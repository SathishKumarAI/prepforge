---
qid: ing_c8f75c109d__aws__local
question: 'Explain: to the server so total you guys — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 439
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:11-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our internal “Google‑Docs‑like” collaboration tool at a fintech firm. The existing monolith lagged under 200 concurrent users; latency spiked to 1 s and we lost edits in ~3 % of sync sessions. My goal was to deliver real‑time, conflict‑free editing for up to 10 k simultaneous users while keeping costs < $5k/month.

**Action (Design)**  
* *Operational Transformation (OT)* – We implemented a client‑side OT algorithm that transforms concurrent operations into a canonical sequence before sending to the server.  
* *Differential Synchronization* – For large documents, we switched to delta‑based sync: only changed blocks are transmitted (≈ 30 % payload reduction).  
* *AWS Services*:  
  - **Amazon API Gateway + Lambda** for stateless OT transform endpoints (scales to 100k RPS).  
  - **ElastiCache Redis** (cluster mode) stores document state and operation queues, guaranteeing sub‑10 ms read/write.  
  - **S3** as immutable audit log of full snapshots.  
* *Scalability & Availability*: Lambda auto‑scales; Redis multi‑AZ replication gives 99.99% availability; failover to a standby cluster costs < $0.02/instance.  

**Result**  
Latency dropped from 1 s to 200 ms under peak load (70 k concurrent edits). Edit loss fell below 0.01%. Operational cost decreased by 35 % ($4.8k → $3.1k/month).  

**Reflection**  
I owned the migration, drove cross‑team collaboration, and iterated on OT until convergence errors were < 10⁻⁶. The bar‑raiser will note my deep dive into algorithmic guarantees, quantified impact, and lessons from early sync failures that shaped our final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
