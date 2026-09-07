---
qid: ing_7462e23eb5__aws__local
question: 'Explain: Roles: the prompt is an API surface — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 536
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:02-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a reusable “prompt‑as‑a‑service” layer for our generative‑AI platform so that downstream data‑science teams could plug in prompts without touching the core LLM engine. The goal was to reduce engineering toil, enforce security, and enable auditability.

**Action – Design & Implementation**  
*Architecture:*  
- **API Gateway + Lambda** as a thin front‑end that validates JSON payloads and forwards them to a *Prompt Service* container in ECS Fargate (CPU 2 vCPU, memory 4 GiB).  
- The service stores prompt templates and context bundles in **Amazon DynamoDB** (partition key = projectId) and caches hot prompts in **ElastiCache‑Redis** for <5 ms latency.  
- A **Step Functions** workflow enriches the context (e.g., pulls user metadata from RDS, runs a pre‑filter on PII via Comprehend).  
- Results are routed to **Amazon OpenSearch** for searchable logs and audit trails.

*Scalability & Cost:*  
- Fargate’s pay‑per‑second model keeps idle cost near zero; auto‑scaling based on CPU usage keeps 95 % of requests under 100 ms.  
- DynamoDB’s provisioned throughput is set to 10 WCU, with On‑Demand fallback for spikes, keeping costs <$0.01/1k ops.

*Trade‑offs:*  
Using Lambda for the API layer reduces operational overhead but introduces a cold‑start window; we mitigated this by pre-warming via CloudWatch events.

**Result**  
Within two weeks of rollout, prompt creation time dropped from ~30 min (manual copy‑paste) to <2 min. The service handled 10× more requests with <1 % error rate, and audit logs cut compliance review time by 70 %.  

**Leadership Principles Reflected**  
- **Ownership** – I led end‑to‑end design, from API spec to deployment.  
- **Dive Deep** – Chose DynamoDB vs. RDS after profiling read patterns; tuned Redis eviction policy for cold start.  
- **Deliver Results** – Quantified speedup and cost savings.  

*Bar‑raiser takeaway:* Demonstrated ownership, deep technical trade‑off analysis, measurable impact, and rapid iteration from failure (cold starts) to solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
