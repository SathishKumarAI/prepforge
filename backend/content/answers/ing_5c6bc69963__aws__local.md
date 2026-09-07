---
qid: ing_5c6bc69963__aws__local
question: 'Explain: HTTP/1.1 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 476
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:20-05:00'
sources: []
---

**Situation & Task**  
I led the migration of a legacy ML inference API from an on‑premise server farm to a fully managed, multi‑region service for our recommendation engine (≈ 5 M requests/day). The goal was to eliminate SSL termination bottlenecks, reduce latency, and cut ops cost by 30 %.  

**Action**  
1. **Design** – I chose *API Gateway* + *Lambda@Edge* for request routing, *Elastic Load Balancer (ALB)* with TLS termination, and *Amazon SageMaker Endpoint* behind a *PrivateLink* VPC endpoint to serve the model.  
2. **Scalability** – ALB scales horizontally; Lambda@Edge auto‑scales globally; SageMaker’s multi‑model endpoints handle burst traffic with warm containers (10 s cold start).  
3. **Availability & Cost** – Multi‑AZ ALBs give 99.99 % SLA, while using *SageMaker Managed Spot Training* for model updates reduced compute spend by 40 %.  
4. **Security** – TLS 1.3 enforced at ALB; IAM policies restrict Lambda to only the endpoint VPC interface.  

**Result**  
- Latency dropped from 350 ms to < 80 ms (average).  
- Uptime improved to 99.997 % over six months.  
- Annual cost fell by $120K, exceeding the 30 % target.  

**Reflection**  
I owned the entire migration loop: requirement gathering, design, implementation, and post‑go‑live monitoring. I *dive deep* into CloudWatch metrics to pinpoint a 15 ms bottleneck in Lambda cold starts and introduced provisioned concurrency. The biggest learning was that simplifying TLS termination at the edge (instead of per instance) dramatically cut overhead—an *Invent & Simplify* win.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Faster, more reliable recommendations directly improved user engagement (+12 % click‑through).  
- **Ownership & Dive Deep** – I drove the end‑to‑end solution and iterated on metrics to achieve measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
