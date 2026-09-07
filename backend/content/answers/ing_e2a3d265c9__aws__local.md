---
qid: ing_e2a3d265c9__aws__local
question: 'Explain: Service Registry and Discovery — Serviceregistry&Discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 394
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:42-05:00'
sources: []
---

**Situation & Goal (Ownership, Customer Obsession)**  
I led the redesign of our micro‑service platform for a global e‑commerce site that had 12 M daily active users. The existing hard‑coded endpoints caused 30 % more latency during traffic spikes and increased deployment risk.

**Task (Bias for Action, Deliver Results)**  
Implement a dynamic Service Registry & Discovery system so services can locate each other at runtime, reduce manual config, and enable zero‑downtime deployments.

**Action (Dive Deep, Invent & Simplify)**  
* **Requirements:** low latency (<5 ms lookup), high availability (>99.99 %), ability to tag instances by region/instance type for weighted routing.  
* **Design:**  
  * **AWS Cloud Map** as the registry – fully managed, supports health checks and metadata tags.  
  * **Elastic Load Balancer (ELB)** front‑end services; ELB queries Cloud Map for healthy targets.  
  * **Lambda + EventBridge** auto‑register/deregister on EC2/ECS task state changes.  
* **Scalability & Cost:** Cloud Map scales automatically, cost ≈ $0.50/1000 lookups/month vs $10k spent on custom DB. ELB eliminates the need for a dedicated discovery proxy.  

**Result (Deliver Results, Quantified Impact)**  
Deployment latency dropped from 120 ms to 35 ms (71 % improvement). Zero‑downtime releases increased by 4×. Operational cost fell 40 %.  

**Learning & Bar‑raiser Check**  
I documented the failure modes of the legacy system and built a monitoring dashboard that alerts on lookup failures, ensuring ownership of reliability from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
