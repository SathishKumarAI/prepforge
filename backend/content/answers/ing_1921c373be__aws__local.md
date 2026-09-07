---
qid: ing_1921c373be__aws__local
question: 'Explain: Forces — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 438
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:56-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a migration of our monolith to a micro‑service architecture on AWS. The team needed an **on‑premises‑style service discovery** that would let services find each other without hard‑coding IPs, while keeping the ability to scale elastically in the cloud.

**Action**  
I architected a *server‑side service discovery* pattern using **AWS Cloud Map** as the registry and **Elastic Load Balancing (ALB)** for routing. Each micro‑service registers its endpoint with Cloud Map on start‑up; ALB queries Cloud Map to forward traffic. I added health‑check integration so unhealthy instances are automatically removed. To keep costs low, I leveraged **Spot Instances** behind a *Managed Scaling* policy and used **AWS Fargate** for stateless services.

I also implemented a lightweight **service‑mesh shim** (using Envoy) to expose the discovery API to legacy clients, ensuring backward compatibility. Throughout the rollout, I ran A/B tests that showed a 35 % reduction in latency and a 22 % cost savings over the previous static DNS approach.

**Result**  
The new pattern gave us **99.99 % availability**, eliminated manual IP churn, and cut operational overhead by 40 %. The team now deploys code every two weeks with zero downtime.

> *Leadership Principles:* **Customer Obsession** – we delivered faster, cheaper service to our internal customers; **Ownership** – I owned the full migration cycle; **Dive Deep** – I analyzed health‑check metrics and fine‑tuned scaling.  

**Bar‑raiser cues:** ownership of end‑to‑end delivery, deep understanding of Cloud Map/ALB trade‑offs, quantifiable impact (latency & cost), and iterative learning from early rollout failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
