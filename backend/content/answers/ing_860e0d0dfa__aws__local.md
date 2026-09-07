---
qid: ing_860e0d0dfa__aws__local
question: 'Explain: Viewing the world as a computer: Global capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 497
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:50-05:00'
sources: []
---

**Situation**  
In my previous role I led the migration of our on‑prem recommendation engine to an AWS‑based ML platform. The system had to serve millions of users in real time while staying under a strict latency SLA (≤ 120 ms).  

**Task**  
Design a *global capacity management* strategy that treats the world as a distributed computer: each region is a node, and we must balance load, cost, and data residency.  

**Action**  
1. **Requirements & Architecture**  
   * Stateless inference endpoints → **Amazon SageMaker Endpoint** (multi‑model).  
   * Global routing with latency awareness → **AWS Global Accelerator + Route 53 weighted routing**.  
   * Auto‑scaling by request volume → **SageMaker Real‑Time Inference Autoscaling** tied to CloudWatch metrics.  
   * Cost control via spot instances and reserved capacity → **SageMaker Managed Spot Training** for model updates, **Reserved Instances** for inference traffic during peak hours.  

2. **Scalability & Availability**  
   * Deploy endpoints in all regions with **cross‑region replication** of the model artifact (S3 + CloudFront).  
   * Use **Amazon EFS** for shared feature store to keep a single source of truth and avoid data silos.  
   * Implement **Canary releases** using SageMaker’s *blue/green* deployment to ensure zero‑downtime rollouts.  

3. **Cost & Trade‑offs**  
   * Spot + Reserved mix reduced inference spend by 35 % versus all on‑demand.  
   * Global Accelerator cut latency variance from 60 ms to < 15 ms across continents.  

**Result**  
The new global capacity model achieved a 97 % success rate for real‑time predictions, dropped end‑to‑end latency by 45 %, and lowered operational cost by $1.2M annually—meeting the SLA while staying within budget.  

**Leadership Principles**  
* **Customer Obsession** – Delivering consistent, low‑latency recommendations directly improved user engagement (↑ 12 % CTR).  
* **Ownership / Dive Deep** – I owned the entire lifecycle from data ingestion to inference, dissected performance bottlenecks at the request level, and iterated on cost models until we hit our targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
