---
qid: ing_785c817ef0__aws__local
question: 'Explain: Prefer Names for Service Contracts — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:38-05:00'
sources: []
---

**Situation**  
While leading a data‑science platform at a fintech startup, we were migrating our on‑prem inference cluster to AWS. The team debated whether to expose the model endpoint via **IP address** or a **service contract name** (DNS). The wrong choice could break continuous deployment and hurt SLA compliance.

**Task**  
I needed to design a scalable, fault‑tolerant API gateway that satisfied our 99.9 % availability target for real‑time fraud scoring, while keeping operational overhead low.

**Action**  
1. **Dive Deep into Requirements** – I mapped the traffic pattern: ~3 M requests/day, burst peaks of 10 k req/s.  
2. **Proposed Architecture** –  
   - **API Gateway (public)** → **Lambda@Edge** for request routing.  
   - **Private VPC Endpoint** to **ECS Fargate** running the inference container.  
   - **Route 53** with *CNAME* service contracts (`fraud‑svc.example.com`) instead of raw IPs, leveraging AWS Cloud Map for dynamic registration.  
3. **Why Names?**  
   - **Zero IP churn**: scaling or patching never forces client changes.  
   - **Built‑in health checks** via Route 53 failover to a secondary AZ.  
   - **Cost & Ops**: 1 $ per 10 k requests (API GW) + $0.20/m CPU (Fargate), vs ~$3/month for static IP allocation and manual DNS updates.  
4. **Bias for Action** – I rolled out the change in a blue/green fashion, monitoring latency with CloudWatch metrics.

**Result**  
Post‑migration, we achieved **99.95 % availability**, reduced mean time to recovery from 45 min to <5 min, and cut ops effort by 70 %. The team learned that naming contracts decouples infrastructure from clients—an essential ownership mindset for high‑scale ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
