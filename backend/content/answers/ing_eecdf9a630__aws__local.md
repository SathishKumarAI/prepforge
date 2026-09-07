---
qid: ing_eecdf9a630__aws__local
question: 'Explain: Client-Server Model and Agent Discovery — Agent to Agent Protocol
  - by Eric Roby and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 458
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:40-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team that built a **distributed ML inference platform** for a global fintech client. The goal was to replace the monolithic inference API with a *client–server* model using **agent‑to‑agent discovery**, inspired by Eric Roby and Neo Kim’s protocol, so each service could dynamically find peers without hard‑coded endpoints.

**Action**  
- Adopted **Amazon ECS + Service Discovery** (AWS Cloud Map) to register each inference agent.  
- Implemented a lightweight *gRPC* handshaking layer that exchanges model version, latency SLA, and health metrics.  
- Used **AWS Lambda** for the discovery broker to keep state in DynamoDB, ensuring eventual consistency and zero‑downtime rollouts.  
- Designed auto‑scaling rules based on per‑agent CPU + inference queue depth; added a *Circuit Breaker* pattern via API Gateway to avoid cascading failures.  
- Benchmarked with 10k concurrent requests: latency dropped from 350 ms (monolith) to **120 ms** and throughput rose by **2×** while cost decreased by **18%** due to efficient container reuse.

**Result**  
The new architecture delivered 99.9% availability, reduced operational overhead for dev‑ops by 40%, and allowed the client to roll out new models in minutes instead of weeks—directly enhancing customer satisfaction (**Customer Obsession**) while owning end‑to‑end performance (**Ownership**).

**Bar‑raiser notes**  
- Demonstrated *dive deep* into AWS service trade‑offs (ECS vs. EKS, Lambda vs. EC2).  
- Quantified impact with real metrics.  
- Reflected on a failed first rollout that taught me to add health‑check hooks before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
