---
qid: ing_e1178173e8__aws__local
question: 'Explain: Sandboxed vs. Unsandboxed Execution — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 415
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**.  
I owned the decision to expose a new ML inference API while keeping our core data pipeline safe. I dove deep into how execution isolation impacts latency, cost, and compliance.

**Situation / Task** – We needed to run user‑generated inference code on the same cluster that served production models, but without risking data leakage or denial of service.

**Action** – I architected a two‑tier pattern:

1. **Sandboxed Execution**  
   *Containerized with ECS Fargate + IAM task role* → each job runs in its own network namespace and limited CPU/RAM.  
   *AWS Nitro Enclaves* for extra isolation when data sensitivity is high.  
   *Service Mesh (AppMesh)* enforces TLS‑only traffic to the inference service.

2. **Unsandboxed Execution** – A separate ECS cluster with *privileged* tasks that have direct access to GPU resources, used only by vetted internal teams.  

I added a *Lambda dispatcher* that validates job payloads against a policy store (DynamoDB), then routes to the appropriate cluster. I modeled cost: sandboxed pods run 30 % cheaper (no GPU) and scale automatically with CloudWatch alarms; unsandboxed pods consume GPUs, but are capped at 200 VCPU hours/day.

**Result** – After launch, we processed 1M inference requests/day with <2 ms added latency for sandboxed jobs. The cost stayed within the $10K/month budget, and a quarterly audit confirmed zero data exfiltration incidents.  

*Bar‑raiser focus:* ownership of risk, deep dive into isolation trade‑offs, quantified performance & cost metrics, and lessons from initial mis‑configured IAM roles that were quickly remediated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
